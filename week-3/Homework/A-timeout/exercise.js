/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

//Task 1

const myTimeout = setTimeout(changeBackgroundColor, 5000);
function changeBackgroundColor() {
  document.body.style.backgroundColor = "red";
}

//Task 2
setInterval(changeColors, 5000);

const colors = ["green", "blue", "red", "black", "purple"];

let index = 0;
function changeColors() {
  document.body.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
}
