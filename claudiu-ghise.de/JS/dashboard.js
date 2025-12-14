const ROOMS = [
  { id: "coridor", name: "Coridor" },
  { id: "bucatarie", name: "Bucatarie" },
  { id: "living", name: "Living" },
  { id: "baie", name: "Baie" },
];

const REFRESH_MS = 10 * 1000;
const DEVICE_TIMEOUT_MS = 90 * 1000; // offline if last data older than this

const roomCharts = {}; // deviceId -> Chart

function registerZoomPlugin() {
  const plugin = window["chartjs-plugin-zoom"] || window.ChartZoom;
  if (plugin && window.Chart && Chart.register) Chart.register(plugin);
}
registerZoomPlugin();

async function fetchJSON(url, opts = {}) {
  const res = await fetch(url, Object.assign({}, opts, { cache: "no-cache" }));
  if (!res.ok) throw new Error("HTTP " + res.status + " for " + url);
  return res.json();
}

function setControlStatus(msg, ok = true) {
  const el = document.getElementById("controlStatus");
  el.textContent = msg;
  el.style.color = ok ? "var(--muted)" : "var(--bad)";
}

function buildRoomCards() {
  const wrap = document.getElementById("rooms");
  wrap.innerHTML = "";
  for (const r of ROOMS) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <div class="room-title">${r.name}</div>
          <div class="room-sub">Temperature / Humidity + Heating status</div>
          <div id="status-${r.id}" class="room-status disc">Status: DISCONNECTED</div>
          <div class="chartWrap"><canvas id="chart-${r.id}"></canvas></div>
        `;
    wrap.appendChild(card);
  }
}

async function loadRoomChart(deviceId) {
  const data = await fetchJSON(
    `/api/history?deviceId=${encodeURIComponent(deviceId)}&limit=200`
  );
  const labels = data.map((r) =>
    new Date(r.createdAt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    })
  );
  const temps = data.map((r) => Number(r.temperature || 0));
  const hums = data.map((r) => Number(r.humidity || 0));

  const canvas = document.getElementById(`chart-${deviceId}`);
  const ctx = canvas.getContext("2d");

  if (!roomCharts[deviceId]) {
    roomCharts[deviceId] = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Temp (°C)",
            data: temps,
            borderWidth: 2,
            tension: 0.25,
            pointRadius: 1,
            yAxisID: "yTemp",
          },
          {
            label: "Hum (%)",
            data: hums,
            borderWidth: 2,
            tension: 0.25,
            pointRadius: 1,
            yAxisID: "yHum",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "nearest", intersect: false },
        scales: {
          x: { display: true },
          yTemp: {
            type: "linear",
            position: "left",
            title: { display: true, text: "°C" },
          },
          yHum: {
            type: "linear",
            position: "right",
            grid: { drawOnChartArea: false },
            title: { display: true, text: "%" },
          },
        },
        plugins: {
          zoom: {
            pan: { enabled: true, mode: "x" },
            zoom: {
              wheel: { enabled: true },
              pinch: { enabled: true },
              mode: "x",
            },
          },
          legend: { labels: { color: "#e5e7eb" } },
        },
      },
    });
  } else {
    const ch = roomCharts[deviceId];
    ch.data.labels = labels;
    ch.data.datasets[0].data = temps;
    ch.data.datasets[1].data = hums;
    ch.update("none");
  }
}

async function refreshOverviewAndStatuses() {
  const tbody = document.querySelector("#latest-table tbody");
  const now = Date.now();

  const rows = await fetchJSON("/api/overview");
  tbody.innerHTML = "";

  for (const row of rows) {
    const hasData = row.createdAt != null;
    const ageMs = hasData ? now - row.createdAt : Infinity;
    const isOnline = hasData && ageMs < DEVICE_TIMEOUT_MS;

    // status for room card
    const statusEl = document.getElementById(`status-${row.deviceId}`);
    if (statusEl) {
      if (!isOnline) {
        statusEl.textContent = "Status: DISCONNECTED";
        statusEl.className = "room-status disc";
      } else if (row.heatingOn) {
        statusEl.textContent = "Status: Heating is ON";
        statusEl.className = "room-status on";
      } else {
        statusEl.textContent = "Status: Heating is OFF";
        statusEl.className = "room-status off";
      }
    }

    // table display
    let heatingText = "DISCONNECTED";
    let heatingStyle = "color:var(--bad);font-weight:700;";
    if (isOnline) {
      heatingText = row.heatingOn ? "ON" : "OFF";
      heatingStyle = row.heatingOn
        ? "color:var(--ok);font-weight:700;"
        : "color:var(--off);";
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
  <td data-label="Device">${row.deviceId}</td>

  <td data-label="Temperature (°C)">${
    isOnline && row.temperature != null
      ? Number(row.temperature).toFixed(1)
      : "-"
  }</td>

  <td data-label="Humidity (%)">${
    isOnline && row.humidity != null ? Number(row.humidity).toFixed(1) : "-"
  }</td>

  <td data-label="Heating" style="${heatingStyle}">${heatingText}</td>

  <td data-label="Time">${
    isOnline
      ? new Date(row.createdAt).toLocaleString([], { hourCycle: "h23" })
      : "-"
  }</td>
`;

    if (!isOnline) tr.classList.add("offline");
    tbody.appendChild(tr);
  }
}

async function loadControlToUI() {
  // dashboard sets control via POST /api/control, but we can prefill defaults by reading overview+local
  // simplest: keep UI as-is (you can extend later to also store/serve dashboard control latest)
  return;
}

async function applyControlFromUI() {
  try {
    const deviceId = document.getElementById("device").value;
    const targetTemp = parseFloat(document.getElementById("targetTemp").value);
    const hysteresis = parseFloat(document.getElementById("hysteresis").value);
    const minOnMin = parseInt(document.getElementById("minOn").value, 1);
    const minOffMin = parseInt(document.getElementById("minOff").value, 1);

    const payload = { deviceId, targetTemp, hysteresis, minOnMin, minOffMin };

    const res = await fetchJSON("/api/control", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok && res.ok !== true) {
      setControlStatus("Apply failed", false);
      return;
    }

    setControlStatus(`Applied ${deviceId} -> ${targetTemp.toFixed(1)}°C`, true);
  } catch (e) {
    console.error(e);
    setControlStatus("Apply failed (check auth)", false);
  }
}

async function refreshAll() {
  await refreshOverviewAndStatuses();
  // load charts per room (safe even if no ESP is connected)
  for (const r of ROOMS) {
    try {
      await loadRoomChart(r.id);
    } catch (e) {
      /* ignore if no data yet */
    }
  }
}

document
  .getElementById("applyBtn")
  .addEventListener("click", applyControlFromUI);

document.addEventListener("DOMContentLoaded", async () => {
  buildRoomCards();
  await loadControlToUI();
  await refreshAll();
  setInterval(refreshAll, REFRESH_MS);
});
