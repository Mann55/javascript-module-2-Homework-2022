function setAlarm() {
  console.log("Setting Alarm...");

  document.body.style.backgroundColor = "white";

  let setTime = document.querySelector("#alarmSet").value.trim();
  let timeRemaining = document.querySelector("#timeRemaining");
  console.log(setTime);

  const interval = setInterval(() => {
    timeRemaining.textContent = `Time Remaining: ${new Date(
      (setTime - 1) * 1000
    )
      .toISOString()
      .substr(14, 5)}`;
    if (setTime === 1) {
      document.body.style.backgroundColor = "red";
      playAlarm();
      clearInterval(interval);
    }
    // setTime--;
    setTime = setTime - 1;
  }, 1);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
