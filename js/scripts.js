var range = function(stop, step=1, start=0) {
  //([number,] number[, number]) -> array
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




var checkInput = function(input) {
  // Checks for valid input from user and outputs error message if needed
  var output;
  if (!parseInt(input) || input < 0) {
    output = "Invalid input, please enter a positive whole number.";
  } else {
    // Call ping-pong when ready
    output = input;
  }
  return output;
};


$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    debugger
    var testRange = range(10);


    var userNumberInput = $("#numberInput").val();
    var result = checkInput(userNumberInput);
    $("#pingPongResult").empty();
    $("#pingPongResult").append("<li>"+result+"</li");

  });

});
