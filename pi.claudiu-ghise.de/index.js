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
  let seconds = 3;
  $(".not").text("Se inchide...");
  $(".timer").text(seconds); // Display initial timer value
  $(".close").prop("disabled", true);
  $(".open").prop("disabled", true);
  turnOffRelay();
  $(".progress").css("transition", "width 3s ease-in-out");
  // Animate the progress bar
  $(".progress").animate({ width: "100%" }); // Animate over 'seconds'
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
      $(".progress").css("transition", "none").css("width", "0%");
    }
  }, 1000); // Update every second
});

$(".open").click(function () {
  let seconds = 3;
  $(".not").text("Se deschide...");
  $(".timer").text(seconds); // Display initial timer value
  $(".open").prop("disabled", true);
  $(".close").prop("disabled", true);
  turnOnRelay();
  // Animate the progress bar
  $(".progress").css("transition", "width 3s ease-in-out");
  $(".progress").animate({ width: "100%" }); // Animate over 'seconds'
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
      $(".progress").css("transition", "none").css("width", "0%");
    }
  }, 1000); // Update every second
});
