setInterval(setClock, 1000)

const second = document.querySelector('.second')
const minute = document.querySelector('.minute')
const hour = document.querySelector('.hour')


function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (currentDate.getMinutes()) / 60;
    const hoursRatio = (currentDate.getHours()) / 12;

    setRotation(second, secondsRatio)
    setRotation(minute, minutesRatio)
    setRotation(hour, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()