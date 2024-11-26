
$(".close").click(function () {
  let seconds = 3;
  $(".not").text("Se inchide...");
  $(".timer").text(seconds); // Display initial timer value
  $(".close").prop("disabled", true);
  $(".open").prop("disabled", true);

  let timer = setInterval(function () {
    seconds--;
    if (seconds > 0) {
      $(".timer").text(seconds); // Update timer value
    } else {
      clearInterval(timer);
      $(".timer").text(""); // Clear timer
      $(".not").text("");
      $(".close").prop("disabled", false);
      $(".open").prop("disabled", false);
    }
  }, 1000); // Update every second
});
$(".open").click(function () {
  let seconds = 3;
  $(".not").text("Se deschide...");
  $(".timer").text(seconds); // Display initial timer value
  $(".open").prop("disabled", true);
  $(".close").prop("disabled", true);

  let timer = setInterval(function () {
    seconds--;
    if (seconds > 0) {
      $(".timer").text(seconds); // Update timer value
    } else {
      clearInterval(timer);
      $(".timer").text(""); // Clear timer
      $(".not").text("");
      $(".open").prop("disabled", false);
      $(".close").prop("disabled", false);
    }
  }, 1000); // Update every second
});

/*
document.addEventListener("DOMContentLoaded", function() {
    function sendCommand(command) {
      fetch(command)
        .then(response => response.text())
        .then(data => {
          document.getElementById("status").innerText = data;
        })
        .catch(error => console.error("Error:", error));
    }
  
   /* window.turnOnRelay = function() {
      sendCommand("https://pi.claudiu-ghise.de/relayon");  
      setTimeout(function() {
        sendCommand("https://pi.claudiu-ghise.de/relayoff");
    }, 5000);
       
    };

  


    window.turnOnRelay = function() {
      sendCommand("https://pi.claudiu-ghise.de/relayon");  
       
    };
    window.turnOffRelay = function() {
      sendCommand("https://pi.claudiu-ghise.de/relayoff");
    };
  });
  */