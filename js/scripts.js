/* Back End */

var range = function(stop, step=1, start=0) {
  //(number[, number][, number]) -> array

  // An attempted recreation of Python's range function. Generate an array of numbers between start and stop non-inclusive, increasing or decreasing by step

  returnArray = [];

  // determine number of iterations required to fill array with given arguments
  var iterationsNeeded = Math.abs((stop - start) / step);
  var currentIteration = 0;

    while (currentIteration < iterationsNeeded) {
      returnArray[currentIteration] = start;
      currentIteration += 1;
      start += step;
    };
  return returnArray;
};


var pingPonger = function(inputNumber) {
  //(number) -> array

  //Return an array of numbers and strings with numbers divisible by 3 replaced with ping, numbers divisible by 5 replaced with pong, numbers divisible by 15 replaced with ping-pong;

  // Create an array of numbers from 1 to number
  var numberList = range(inputNumber + 1, 1, 1);

  var pongList =  numberList.map(function(number) {
    if (number % 15 === 0) {
      return "Ping-Pong!";
    } else if (number % 5 === 0) {
      return "Pong!";
    } else if (number % 3 === 0) {
      return "Ping!";
    } else {
      return number;
    }
  });
  return pongList;
};


var mainProgram = function(input) {
  // (string) -> array

  // Checks for valid input from user and outputs error message if needed
  // Else parse input and call pingPonger

  var output;

  if (!parseInt(input) || input < 0) {
    output = ["Invalid input, please enter a positive whole number."];
  } else {
    output = pingPonger(parseInt(input));
  }
  return output;
};


/* Front End */

var displayResults = function(resultArray) {
  // (array, string) -> undefined

  // Counter for window.setInterval below
  var i = 0;

  var displayCurrentItem = function() {
  // Acts as a pseudo-loop, texting items

    if (i < resultArray.length) {
      // Condition for window.setInterval below


      // Clear results before displaying a new result
      $("#counter, #ping, #pong, #pingPong").empty();

        // Texts results to corresponding divs
        if (parseInt(resultArray[i])) {
          $("#counter").text(resultArray[i]);
        } else if (resultArray[i] === "Ping!") {
          $("#ping").text(resultArray[i]);
        } else if (resultArray[i] === "Pong!") {
          $("#pong").text(resultArray[i]);
        } else if (resultArray[i] === "Ping-Pong!") {
          $("#pingPong").text(resultArray[i]);
        } else {
          $("#counter").text(resultArray[i]);
        }
        // Incrementer for window.setInterval
        i += 1;
    } else {
      // When out of items cancel interval timer
      window.clearInterval(displayId);
    }
  };
  // Call displayCurrentItem every 600 ms until out of items
  var displayId = window.setInterval(displayCurrentItem, 600);

};




$(document).ready(function(){

  $("#inputBox").submit(function(event){
    event.preventDefault();

    // Take user number in
    var userNumberInput = $("#numberInput").val();

    // Check input and either output error or call pingPonger
    var results = mainProgram(userNumberInput);

    // Clear outputList and append with pingpong results
    displayResults(results);
  });

  $("#clear").click(function(){
    // Clear results on button click
    $("#counter, #ping, #pong, #pingPong").empty();
  });

});
