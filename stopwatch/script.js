let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      elapsedTime++;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
});

document.getElementById("reset").addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
  }
});

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
