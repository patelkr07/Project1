
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiZh4_U2WCFxes509WTtCLi68k2kKougM",
  authDomain: "project1-8aae6.firebaseapp.com",
  databaseURL: "https://project1-8aae6.firebaseio.com",
  projectId: "project1-8aae6",
  storageBucket: "",
  messagingSenderId: "106844699602"
};
firebase.initializeApp(config);

// Create an initial toDoCount variable
var addQuestion = "";

//  On Click event associated with the add-to-do function
$("#question").on("click", function (event) {
  event.preventDefault();

  // Get the to-do "value" from the textbox and store it a variable
  var askQuestion = $("#ask").val().trim();

  // Create a new variable that will hold a "<p>" tag.
  // Then give it an ID in the following form:
  // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
  // Then set the to-do "value" as text to this <p> element.
  var answer = $("<p>");

  answer.attr("id", `item-${addQuestion}`);
  answer.text(askQuestion);

  // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
  // Give your button a data attribute called data-to-do and a class called "checkbox".
  // Lastly add a checkmark inside.

  var toAskClose = $("<button>");

  toAskClose.attr("data-ask", askQuestion);
  toAskClose.addClass("ul");
  toAskClose.text("");

  // Append the button to the to do item
  toAskClose = toAskClose.prepend(toAskClose);

  // Add the button and to do item to the to-dos div
  $("#to-ask").append(answer);

  // Clear the textbox when done
  $("#ask").val("");

  // Add to the toDoCount
  askQuestionCount++;

});
$("#to-ask").text(localStorage.getItem("answer"));


// When a user clicks a check box then delete the specific content
// (NOTE: Pay attention to the unusual syntax here for the click event.
// Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
$(document.body).on("click", ".ul", function () {

  // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
  var questionNumber = $(this).attr("data-ask");

  // Select and Remove the specific <p> element that previously held the to do item number.
  $("#item-" + questionNumber).remove();
});

localStorage.clear();
localStorage.setItem("answer", addQuestion);
$("#ask").text(localStorage.getItem("answer"));