$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    //collect number entered by user then alert to test functionality
    let userInput = $("input#submission").val();
    //create array for values generated by input loop to be pushed into
    let array = [];
    //create for loop of input
    for (let i = 0; i < userInput.length; i++) {
    //all numbers up to and including user inputted number are pushed to array
      array.push(userInput[i]);
      console.log(array);
    }
    alert(array);
  });
 }); 

//  determine if input contains 1
//  if (userInput[i] === "1") {
//   alert("Beep!");
// } else {
//   alert("Boop!");
// } if (userInput[i] === "1") {

// }