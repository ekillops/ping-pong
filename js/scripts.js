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

var displayResults = function(resultArray, outputIdString) {
  // (array, string) -> undefined

  // Empty output list
  $(outputIdString).empty();

  // Append a new list item in outputList for each item in resultArray
  resultArray.forEach(function(arrayItem) {
  $(outputIdString).append("<li>"+arrayItem+"</li>");
  });
};



$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();

    // Define output target
    var outputList = "#pingPongResult";

    // Take user number in
    var userNumberInput = $("#numberInput").val();

    // Check input and either output error or call pingPonger
    var results = mainProgram(userNumberInput);

    // Clear outputList and append with pingpong results
    displayResults(results, outputList);
  });

});
