let timerDisplay = document.querySelector('.timerdisplay');
let Stopbtn = document.getElementById('stopbtn');
let Resetbtn = document.getElementById('resetbtn');
let Startbtn = document.getElementById('startbtn');

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;

Startbtn.addEventListener('click', function () {
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

Stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

Resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = sec = min = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;

}