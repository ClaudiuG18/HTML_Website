const ws = new WebSocket("wss://claudiu-ghise.de/ws");
let sAAngle = 135;
let sBAngle = 135;
let intervalId;
let timeoutId;
let currentIncrement = 1;
const MIN_ANGLE = 15;
const MAX_ANGLE = 255;
const SINGLE_CLICK_DELAY = 50; // Milliseconds before single click registers
const HOLD_DELAY = 300; // Milliseconds before hold starts repeating

// Get increment rate input
const incrementInput = document.getElementById("incrementRate");

incrementInput.addEventListener("input", (e) => {
  const newValue = parseInt(e.target.value) || 1;
  currentIncrement = Math.max(1, Math.min(100, newValue));
  e.target.value = currentIncrement;
});

function startAdjustment(servo, direction) {
  // Schedule single click action
  timeoutId = setTimeout(() => {
    adjustAngle(servo, direction)();
    // Start repeating after hold delay
    intervalId = setInterval(() => {
      adjustAngle(servo, direction)();
    }, 100);
  }, SINGLE_CLICK_DELAY);
}

function adjustAngle(servo, direction) {
  return function () {
    const increment =
      direction === "plus" ? currentIncrement : -currentIncrement;

    if (servo === "A") {
      sAAngle = Math.min(Math.max(sAAngle + increment, MIN_ANGLE), MAX_ANGLE);
      updateDisplay("sAAngle", sAAngle);
      sendCommand("A", sAAngle);
    } else {
      sBAngle = Math.min(Math.max(sBAngle + increment, MIN_ANGLE), MAX_ANGLE);
      updateDisplay("sBAngle", sBAngle);
      sendCommand("B", sBAngle);
    }
  };
}

function stopAdjustment() {
  clearTimeout(timeoutId);
  clearInterval(intervalId);
}

function setupButton(buttonId, servo, direction) {
  const button = document.getElementById(buttonId);

  const startEvents = ["mousedown", "touchstart"];
  startEvents.forEach((event) => {
    button.addEventListener(event, (e) => {
      if (e.cancelable) e.preventDefault();
      startAdjustment(servo, direction);
    });
  });

  const stopEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
  stopEvents.forEach((event) => {
    button.addEventListener(event, (e) => {
      if (e.cancelable) e.preventDefault();
      stopAdjustment();
    });
  });
}

setupButton("sAPlus", "A", "plus");
setupButton("sAMinus", "A", "minus");
setupButton("sBPlus", "B", "plus");
setupButton("sBMinus", "B", "minus");

document.getElementById("resetBtn").addEventListener("click", () => {
  sAAngle = 135;
  sBAngle = 135;
  updateDisplay("sAAngle", sAAngle);
  updateDisplay("sBAngle", sBAngle);
  sendCommand("A", 135);
  sendCommand("B", 135);
});

function updateDisplay(elementId, angle) {
  document.getElementById(elementId).textContent = angle;
}

function sendCommand(servoName, angle) {
  ws.send(`${servoName},${angle}`);
}
