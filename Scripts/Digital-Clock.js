
const clock = document.getElementById("clock")
function updateClock () {
    const time = new Date();
    let hours = time.getHours();
    const meridiam = hours > 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString();
    const timeString = `${hours}:${minutes}:${seconds} ${meridiam}`;
    clock.textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);