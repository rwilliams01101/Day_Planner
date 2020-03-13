// this waits for the page to load before starting to run the script
$(document).ready(function() {

  // display current day on page, added current time for scheduling purposes
  $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm'));
  // listen for save button clicks
  $(".saveBtn").on("click", function() {

    // sets variable "value" for all siblings of "description" class. Pulls value from input
    var value = $(this).siblings(".description").val();

    // sets variable "time" for the parent of the input, in this case the time id
    var time = $(this).parent().attr("id");

    // saves time and value in localStorage
    localStorage.setItem(time, value);
  });

  // creates function hourUpdater
  function hourUpdater() {
    // get current number of hours "moment()" references the moment.js
    var currentHour = moment().hours();

    // sets variable for blockHour. loop over time blocks.
    $(".time-block").each(function() {
      // parseInt breaks apart the items in this look, adds attribute "id" and splits the array
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time, if so add "past" class
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      // check if time is strictly equal to the current time
      else if (blockHour === currentHour) {
        // remove "past" class
        $(this).removeClass("past");
        // add "present" class
        $(this).addClass("present");
      } 
      // check if time !== the current time or past time
      else {
        // remove "past" class
        $(this).removeClass("past");
        // remove "present" class
        $(this).removeClass("present");
        // add "future" class
        $(this).addClass("future");
      }
    });
  }

  // calls hourUpdater function 
  hourUpdater();

  // set up interval to check if current time needs to be updated, looks like every 15 seconds
  var interval = setInterval(hourUpdater, 15000);

  // loads the specified item that was "saved" from localStorage
  $("#hour-0 .description").val(localStorage.getItem("hour-0"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));
  $("#hour-23 .description").val(localStorage.getItem("hour-23")); 
});
