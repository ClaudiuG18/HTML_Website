ws = new WebSocket(`wss.robo.claudiu-ghise.de/ws`);

// Update angle display and send command
function updateServo(id, angle) {
  document.getElementById(`${id}Val`).textContent = `${angle}°`;
  const message =
    `SERVO1:${document.getElementById("servo1").value},` +
    `SERVO2:${document.getElementById("servo2").value},` +
    `SERVO3:${document.getElementById("servo3").value},` +
    `SERVO4:${document.getElementById("servo4").value},` +
    `SERVO5:${document.getElementById("gripper").value}`;

  ws.send(message);
}

// Add event listeners to sliders
document.querySelectorAll(".slider").forEach((slider) => {
  slider.addEventListener("input", (e) => {
    const id = e.target.id;
    const angle = e.target.value;
    updateServo(id, angle);
    console.log(`ID: ${id}, Angle: ${angle}`);
  });
});

// Send stepDelay and stepSize updates
document.getElementById("stepDelay").addEventListener("input", (e) => {
  const delay = e.target.value;
  document.getElementById("stepDelayVal").textContent = `${delay}ms`;
  ws.send(`STEP_DELAY:${delay}`);
});

document.getElementById("stepSize").addEventListener("input", (e) => {
  const size = e.target.value;
  document.getElementById("stepSizeVal").textContent = `${size}µs`;
  ws.send(`STEP_SIZE:${size}`);
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("servo1Val").textContent = 60;
  document.getElementById("servo2Val").textContent = 110;
  document.getElementById("servo3Val").textContent = 50;
  document.getElementById("servo4Val").textContent = 120;
  document.getElementById("gripperVal").textContent = 90;
  document.getElementById("stepDelayVal").textContent = 15;
  document.getElementById("stepSizeVal").textContent = 5;

  document.getElementById("servo1").value = 60;
  document.getElementById("servo2").value = 110;
  document.getElementById("servo3").value = 50;
  document.getElementById("servo4").value = 120;
  document.getElementById("gripper").value = 90;
  document.getElementById("stepDelay").value = 15;
  document.getElementById("stepSize").value = 5;
  ws.send("RESET");
});

document.getElementById("run").addEventListener("click", () => {
  let text = document.getElementById("textarea").value;
  alert(text);
});
