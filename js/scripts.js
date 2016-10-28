

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


    var userNumberInput = $("#numberInput").val();
    var result = checkInput(userNumberInput);
    $("#pingPongResult").append("<li>"+result+"</li");

  });

});
