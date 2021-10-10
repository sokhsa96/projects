setInterval(setClock, 1000)
setInterval(setDigital, 1000)

const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

const digitalDate = document.querySelector('.digitalDate')
const digitalTime = document.querySelector('.digitalTime')

function setClock() {
    const time = new Date()
    const secondRatio = time.getSeconds();
    const minuteRatio = time.getMinutes();
    const hourRatio = time.getHours();

    setRotation(second, secondRatio / 60)
    setRotation(minute, minuteRatio / 60)
    setRotation(hour, hourRatio / 12)
}

function formatHour(hour) {
    if (hour > 12) {
        return hour - 12;
    }
    return hour;
}

function setDigital() {
    const time = new Date()
    let s = time.getSeconds();
    let m = time.getMinutes();
    let hour = time.getHours();
    let day = time.getDate();
    /* new Date.getDay() get the number of the day in the weekend
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    */
    const month = time.getMonth(); // 0 - 1 - 2 ..ect.
    const year = time.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let amPm = 'PM'
    if (hour < 12) {
        amPm = 'AM'
    }

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    hour = (hour < 10) ? "0" + hour : hour;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    day = (day < 10) ? "0" + day : day;

    const digitalD = `<span class="alldigital"><span class="day">${day}</span>-<span class="month">${monthNames[month]}</span>-<span class="year">${year} </span> <br/>  </span>`;
    const digitalT = `<span class="hours">${hour}</span>:${m}:${s}  ${amPm}`;



    digitalTime.innerHTML = digitalT
    digitalDate.innerHTML = digitalD

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
setDigital()