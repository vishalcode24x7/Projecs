let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function showtime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let HourRotation = 30*hh + mm/2;
    let MinuteRotation = 6*mm;
    let SecondRotation = 6*ss;

    sec.style.transform = `rotate(${SecondRotation}deg)`;
    min.style.transform = `rotate(${MinuteRotation}deg)`;
    hr.style.transform = `rotate(${HourRotation}deg)`;
}
setInterval(showtime, 1000)