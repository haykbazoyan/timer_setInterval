let secondsCount = 0;

let display = document.querySelector(".displayTimer");
let stopWatch;

let inpSeconds = document.querySelector(".inputSeconds");
let inpButton = document.querySelector(".inputButton");

let hours = 0;
let minutes = 0;
let seconds = 0;
let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;

let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");

display.textContent =
  "0" + displayHours + ":" + "0" + displayMinutes + ":" + "0" + displaySeconds;

function displayLook(value) {
  if (Number.isNaN(Number(value))) {
    return (display.textContent = "WRONG");
  }
  hours = Math.floor(value / 3600);
  minutes = Math.floor((value % 3600) / 60);
  seconds = Math.floor(value % 60);

  displayHours = hours < 10 ? "0" + hours : hours;
  displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

inpButton.addEventListener("click", () => {
  secondsCount = Number(inpSeconds.value);
  displayLook(secondsCount);
  clearInterval(stopWatch);
  startButton.disabled = false;
});

function timer() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    display.textContent = "Time is over";
    clearInterval(stopWatch);
    return 0;
  }

  secondsCount--;
  displayLook(secondsCount);
}

startButton.addEventListener("click", () => {
  if (secondsCount === 0) {
    return 0;
  }
  stopWatch = setInterval(timer, 1000);
  startButton.disabled = true;

  startButton.classList.toggle("startDis");
  // startButton.setAttribute("disabled", "disabled");
});

stopButton.addEventListener("click", () => {
  clearInterval(stopWatch);
  startButton.disabled = false;
  // startButton.removeAttribute("disabled");
});

resetButton.addEventListener("click", () => {
  clearInterval(stopWatch);
  secondsCount = Number(inpSeconds.value);
  startButton.disabled = false;
  // startButton.removeAttribute("disabled");
  displayLook(secondsCount);
});

// timer();
