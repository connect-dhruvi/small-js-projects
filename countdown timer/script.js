
const newYear = '1 Jan 2021';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const daysLeft = new Date(newYearDate - currentDate);
    const seconds = (daysLeft / 1000);
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const mins = Math.floor(seconds / 60) % 60;
    const secs = Math.floor(seconds % 60);

    document.getElementById('days').innerHTML = setTime(days) +":";
    document.getElementById('hours').innerHTML = setTime(hours)+":";
    document.getElementById('mins').innerHTML = setTime(mins)+":";
    document.getElementById('secs').innerHTML = setTime(secs);
}

function setTime(time){
    return time < 10 ? `0${time}`: time  ;
}

setInterval(countdown, 1000);

countdown();