/* The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

Create an input field in your DOM. Give it an id of message.
Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
Give each article a different border color.
Write an event listener that listens for the keyup event on the input field.
The event handler function should update the textContent property of both sections. */

let redbox = document.getElementById("redbox");
let bluebox = document.getElementById("bluebox");
let inputBox = document.getElementById("message");


inputBox.addEventListener("keyup", function(event) {
    bluebox.innerHTML = event.target.value
})

inputBox.addEventListener("keyup", function(event) {
    redbox.innerHTML = event.target.value
})