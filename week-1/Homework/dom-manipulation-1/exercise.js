/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const pElement = document.querySelectorAll("p");
pElement.length === 6 ? console.log(pElement) : console.log("bad value");

const siteHeader = document.querySelector(".site-header");
console.log(siteHeader);

const jumbotronText = document.querySelector("#jumbotron-text");
console.log(jumbotronText);

const primaryContent = document.querySelectorAll(".primary-content p");
primaryContent.length === 3
  ? console.log(primaryContent)
  : console.log("bad value");

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertMessage);
function alertMessage() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", changeColor);
function changeColor(e) {
  e.preventDefault();
  document.body.style.backgroundColor = "#dfa891";
}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const addSomeText = document.querySelector("#addTextBtn");
addSomeText.addEventListener("click", addNewParagraph);
function addNewParagraph(e) {
  e.preventDefault();
  let mainArticles = document.querySelector("#mainArticles");
  let paragraph = document.createElement("p");
  mainArticles.appendChild(paragraph);
  paragraph.innerText = "Congrats !! The new paragraph has been added.";
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", increaseText);
function increaseText() {
  let allLinks = document.querySelectorAll("a");
  for (let i = 0; i < allLinks.length; i++) {
    //console.log(i);
    allLinks[i].style.fontSize = "large";
  }
}

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and 
create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let addArticleBtn = document.querySelector("#addArticleBtn");
addArticleBtn.addEventListener("click", addText);
function addText(e) {
  //console.log("hello");
  e.preventDefault();
  const formControl = document.querySelector(".form-control").value;
  const articles = document.querySelector(".articles");
  const newParagraph = document.createElement("p");
  articles.appendChild(newParagraph);
  newParagraph.innerHTML = formControl;
  document.querySelector(".form-control").value = "";
}

/*
Task 7
======
Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

/*
let colors = ["red", "blue", "black", "purple", "green"];
const colorBtn = document.querySelector("#bgrChangeBtn");
colorBtn.addEventListener("click", changeNextColor);
let i = 0;
function changeNextColor(e) {
  e.preventDefault();
  i = i < colors.length - 1 ? ++i : 0;
  document.body.style.backgroundColor = colors[i];
}
*/

let colors = ["red", "blue", "black", "purple", "green"];
const colorBtn = document.querySelector("#bgrChangeBtn");
colorBtn.addEventListener("click", changeNextColor);
let index = 0; //An index variable to track the current and next colors.
function changeNextColor(e) {
  e.preventDefault();
  document.body.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
}
