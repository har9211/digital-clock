const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

function pad(num) {
    return String(num).padStart(2, "0");
}

function updateClock() {
    const now = new Date();

    hoursE1.textContent = pad(now.getHours());
    minutesE1.textContent = pad(now.getMinutes());  
    secondsE1.textContent = pad(now.getSeconds());
}

updateClock();
setInterval(updateClock, 1000);