//business logic
function beepIt(userInput) {
//create array for values generated by input loop to be pushed into
  let array = [];
//loop through array based on the length of the input string
  for (let i = 0; i <= userInput; i++) {
//assign values to array
    let j = i.toString()
    if (j.includes('3')) {
    array.push("Won't you be my neighbor?");
    } else if (j.includes('2')) {
    array.push("Boop!");
    } else if (j.includes('1')) {
    array.push("Beep!");
    } else {
    array.push(j);
    };
  };
  let response = array.join(", ");
  return(response);
};

//user interface logic
  $(document).ready(function() {
    $("form#form").submit(function(event) {
      event.preventDefault();
      let userInput = $("input#submission").val();
      $("p").text(beepIt(userInput));
    });
  });