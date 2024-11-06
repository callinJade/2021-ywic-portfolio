/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README


// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");


Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README

const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment

This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

function bulbOn()
{
  //document.getElementById("bulb").style.height="100px";
  document.getElementById("bulb").style.width="150px";
  document.getElementById("bulb").src="https://cdn.glitch.com/faa41287-8f83-41c1-9db1-2a4868d491bc%2Flight-bulb-on-clipart.png?v=1625167173192";
}

function bulbOff()
{
  //document.getElementById("bulb").style.height="300px";
  document.getElementById("bulb").style.width="100px";
  document.getElementById("bulb").src="https://cdn.glitch.com/faa41287-8f83-41c1-9db1-2a4868d491bc%2FbulbOff.png?v=1625167294028";
}


// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
