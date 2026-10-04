const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const ampmEl = document.getElementById("ampm");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

function pad(num) {
  return String(num).padStart(2, "0");
}

function updateClock() {
  const now = new Date();

  // ---- Time (12-hour format) ----
  let hours = now.getHours();            // 0-23
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;              // 13 -> 1, 0 -> 12

  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  timeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  ampmEl.textContent = ampm;

  // ---- Date ----
  const dayName = days[now.getDay()];        // 0-6
  const monthName = months[now.getMonth()];  // 0-11
  dateEl.textContent = `${dayName}, ${now.getDate()} ${monthName}, ${now.getFullYear()}`;
}

updateClock();
setInterval(updateClock, 1000);