const secondsHand = document.getElementById('seconds-clock-hand');
const minutesHand = document.getElementById('minutes-clock-hand');
const hoursHand = document.getElementById('hours-clock-hand');
const timeText = document.getElementById('time-txt');
const clock = document.getElementById('clock');
const neonCheckbox = document.getElementById('neon-checkbox');
const timeCheckbox = document.getElementById('time-checkbox');
const blinkCheckbox = document.getElementById('blink-checkbox');
const blinkSwitch = document.getElementById('blink-switch');


function getTime() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
    const degreesPerSec = 6;
    const timeTxt = translateTime(seconds, minutes, hours);
    
    secondsHand.style.transform = 'rotate(' + (seconds * degreesPerSec) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * degreesPerSec + seconds / 10) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';
    timeText.innerHTML = timeTxt;

    digitalSubmenu(timeCheckbox);

    neonCheckbox.checked ? clock.classList.add("neon") : clock.classList.remove("neon");

    if (blinkCheckbox.checked) {
        timeText.innerHTML = (seconds % 2 == 0) ? timeTxt.replaceAll(":", " ") : timeTxt.replaceAll(" ", ":");
    }
    
}

function digitalSubmenu(checkbox) {
    if (checkbox.checked) {
        timeText.classList.add("visible");
        blinkSwitch.classList.add("visible");
        return;
    }
    timeText.classList.remove("visible");
    blinkSwitch.classList.remove("visible");
    return;
}


function translateTime(seconds, minutes, hours) {
    return hours.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    }) + ":" + minutes.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    }) + ":" + seconds.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    });
}



setInterval(getTime, 100);