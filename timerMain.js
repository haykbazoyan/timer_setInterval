let secondsCount = 0;

let inpSeconds = document.querySelector(".inputSeconds");
let inpButton = document.querySelector(".inputButton");

inpButton.addEventListener("click", () => {
  secondsCount = Number(inpSeconds.value);
});

let display = document.querySelector(".displayTimer");
let stopWatch;

function timer() {
  let hours = Math.floor(secondsCount / 3600);
  let minutes = Math.floor((secondsCount % 3600) / 60);
  let seconds = Math.floor(secondsCount % 60);

  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    return 0;
  }

  secondsCount--;
}

let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");

startButton.addEventListener("click", () => {
  stopWatch = setInterval(timer, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  clearInterval(stopWatch);
  startButton.disabled = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(stopWatch);
  secondsCount = Number(inpSeconds.value);
  startButton.disabled = false;
  timer();
});

timer();
