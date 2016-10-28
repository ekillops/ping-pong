


$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();


    var result = $("#numberInput").val();
    $("#pingPongResult").append("<li>"+result+"</li");

  });

});
