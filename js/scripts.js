$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    //collect number entered by user then alert to test functionality
    let userInput = $("input#submission").val();
    //test to see if variable contains integer
    console.log(Number.isInteger(userInput));
  });
 }); 