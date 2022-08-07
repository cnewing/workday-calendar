// T O D A Y ' S  D A T E
$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMM Do YYYY "));

  $(".save-note").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // L O C A L  S T O R A G E  S A V E
    localStorage.setItem(time, text);
  });
});

// T I M E  T R A C K E R

function timeTracker() {
  //  G E T  C U R R E N T  T I M E
  var currentTime = moment().hour();

  // S C H E D U L E  B L O C K  L O O P
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("hour")[1]);

    if (hour < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (hour === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// L O C A L  S T O R A G E  S A V E  D A T A  O N  R E L O A D

$("#hour-9 .description").val(localStorage.getItem("hour9"));
$("#hour-10 .description").val(localStorage.getItem("hour10"));
$("#hour-11 .description").val(localStorage.getItem("hour11"));
$("#hour-12 .description").val(localStorage.getItem("hour12"));
$("#hour-13 .description").val(localStorage.getItem("hour13"));
$("#hour-14 .description").val(localStorage.getItem("hour14"));
$("#hour-15 .description").val(localStorage.getItem("hour15"));
$("#hour-16 .description").val(localStorage.getItem("hour16"));
$("#hour-17 .description").val(localStorage.getItem("hour17"));

timeTracker();
