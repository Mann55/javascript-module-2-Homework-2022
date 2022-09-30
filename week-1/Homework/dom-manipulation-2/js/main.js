/* Part 1 */

const blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", changeColor);

function changeColor(e) {
  e.preventDefault();
  // console.log("hello");
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#588fbd";

  const donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
  donateBike.style.backgroundColor = "#ffa500";

  const volunteer = document.querySelector(".btn.btn-secondary.btn-lrg");
  volunteer.style.backgroundColor = "black";
}

const orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", orangeButton);
function orangeButton(e) {
  e.preventDefault();
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#f0ad4e";

  const donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
  donateBike.style.backgroundColor = "#5751fd";

  const volunteer = document.querySelector(".btn.btn-secondary.btn-lrg");
  volunteer.style.backgroundColor = "#31b0d5";
}

const greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", greenButton);
function greenButton(e) {
  e.preventDefault();
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#87ca8a";

  const donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
  donateBike.style.backgroundColor = "black";

  const volunteer = document.querySelector(".btn.btn-secondary.btn-lrg");
  volunteer.style.backgroundColor = "#8c9c08";
}

/* Part 2 */
const form = document.querySelector("form");
form.addEventListener("submit", checkForm);
function checkForm(e) {
  e.preventDefault();
  //  console.log("hello");
  //  form.style.backgroundColor = "red";
  const emailField = document.querySelector("#exampleInputEmail1");
  const nameField = document.querySelector("#example-text-input");
  const description = document.querySelector("#exampleTextarea");

  if (emailField.value <= 0) {
    //console.log("field is empty");
    emailField.style.backgroundColor = "red";
  }
  if (nameField.value <= 0) {
    nameField.style.backgroundColor = "red";
  }
  if (description.value <= 0) {
    description.style.backgroundColor = "red";
  } else {
    alert("Thank you for filling out the form !");
  }

  emailField.value = "";
  nameField.value = "";
  description.value = "";
}
