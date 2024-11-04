document.addEventListener("DOMContentLoaded", function() {
    function sendCommand(command) {
      fetch(command)
        .then(response => response.text())
        .then(data => {
          document.getElementById("status").innerText = data;
        })
        .catch(error => console.error("Error:", error));
    }
  
    window.turnOnRelay = function() {
      sendCommand("https://pi.claudiu-ghise.de/relayon");  
      setTimeout(function() {
        sendCommand("https://pi.claudiu-ghise.de/relayoff");
    }, 5000);
    };
  
    window.turnOffRelay = function() {
      sendCommand("https://pi.claudiu-ghise.de/relayoff");
    };
  });
  