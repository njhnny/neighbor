$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    //collect number entered by user then alert to test functionality
    let userInput = $("input#submission").val();
    //create for loop of input
    for (let i = 0; i < userInput.length; i++) {
    //determine if input contains 1
      if (userInput[i] === "1") {
        alert("Beep!");
      } else {
        alert("Boop!");
      }
    }
  });
 }); 