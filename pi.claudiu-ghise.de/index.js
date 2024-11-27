$(document).ready(function () {
  function sendCommand(command) {
    $.get(command)
      .done(function (data) {
        $("#status").text(data);
      })
      .fail(function (error) {
        console.error("Error:", error);
      });
  }

  window.turnOnRelay = function () {
    sendCommand("https://pi.claudiu-ghise.de/on");
  };

  window.turnOffRelay = function () {
    sendCommand("https://pi.claudiu-ghise.de/off");
  };
});

$(".close").click(function () {
  let seconds = 2;
  $(".not").text("Se inchide...");
  $(".close").prop("disabled", true);
  $(".open").prop("disabled", true);
  turnOffRelay();
  $(".progress").css("transition", "width 2s ease-in-out");
  // Animate the progress bar
  $(".progress").animate({ width: "100%" });
  let timer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      $(".not").text("");
      $(".close").prop("disabled", false);
      $(".open").prop("disabled", false);
      $(".progress").css("transition", "none").css("width", "0%");
    }
  }, 1000); // Update every second
});

$(".open").click(function () {
  let seconds = 2;
  $(".not").text("Se deschide...");
  $(".open").prop("disabled", true);
  $(".close").prop("disabled", true);
  turnOnRelay();
  // Animate the progress bar
  $(".progress").css("transition", "width 2s ease-in-out");
  $(".progress").animate({ width: "100%" }); // Animate over 'seconds'
  let timer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      $(".timer").text(""); // Clear timer
      $(".not").text("");
      $(".open").prop("disabled", false);
      $(".close").prop("disabled", false);
      $(".progress").css("transition", "none").css("width", "0%");
    }
  }, 1000); // Update every second
});
