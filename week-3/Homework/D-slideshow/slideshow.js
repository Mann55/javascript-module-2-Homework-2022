// Write your code here
let img1 = "./images/cat1.jpg";
let img2 = "./images/cat2.jpg";
let img3 = "./images/cat3.jpg";
let img4 = "./images/cat4.jpg";

let images = [img1, img2, img3, img4];

const content = document.querySelector("#content");
let img = document.createElement("img");
content.appendChild(img);

//content.appendChild(p);

img.src = images[0];

img.style.height = "260px";
img.style.marginLeft = "50px";
img.style.marginTop = "50px";

const autoBack = document.querySelector("#autoBack");
const backImage = document.querySelector("#backBtn");
const stopImage = document.querySelector("#stop");
const nextImage = document.querySelector("#nextBtn");
const autoForward = document.querySelector("#autoForward");

autoBack.addEventListener("click", autoBackImage);
backImage.addEventListener("click", showPreviousImage);
stopImage.addEventListener("click", pauseImage);
nextImage.addEventListener("click", showNextImage);
autoForward.addEventListener("click", autoForwardImage);

let index = 0;
function showNextImage() {
  console.log("workinn...");
  if (index < images.length - 1) {
    index = index + 1;
    img.src = images[index];
  }
}

function showPreviousImage() {
  if (index > 0) {
    index--;
    img.src = images[index];
  }
}

let playing = true;
function autoForwardImage() {
  if (playing) {
    img.src = images[index];
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    setTimeout(autoForwardImage, 1000);
  }
}

function autoBackImage() {
  console.log("workinn..");
  if (playing) {
    img.src = images[index];
    if (index > 0) {
      index--;
    } else {
      index = 1;
    }
    setTimeout(autoBackImage, 1000);
  }
}

function pauseImage() {
  playing = false;
}
