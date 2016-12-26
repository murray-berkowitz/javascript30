function getDateVars(){
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    if(hour >= 13){
        hour = hour-12;
    }
    var dateObj = {
        seconds: sec,
        minutes : min,
        hours: hour
    };
    return dateObj;
}
function updateClock (dateObj){
    var secHand = document.getElementsByClassName('sec-hand');
    var minHand = document.getElementsByClassName('min-hand');
    var hourHand = document.getElementsByClassName('hour-hand');
    var digitalSec = document.querySelector('.seconds');
    var digitalMin = document.querySelector('.minutes');
    var digitalHour = document.querySelector('.hour');
    rotateSec = (dateObj.seconds * 6) + 90;
    if(rotateSec == 450) {
        rotateSec = 90;
    }
    rotateMin = (dateObj.minutes * 6) + 90;
    rotateHour = (dateObj.hours * 30) +90;
    secHand[0].style.transform = 'rotate(' + rotateSec + 'deg)';
    minHand[0].style.transform = 'rotate(' + rotateMin + 'deg)';
    hourHand[0].style.transform = 'rotate(' + rotateHour + 'deg)';
    if(dateObj.seconds < 10){
        dateObj.seconds = "0" + dateObj.seconds;
    }
    if(dateObj.minutes < 10){
        dateObj.minutes = "0" + dateObj.minutes;
    }
    if(dateObj.hours < 10){
        dateObj.hours = "0" + dateObj.hours;
    }
    digitalSec.innerHTML = dateObj.seconds;
    digitalMin.innerHTML = dateObj.minutes + ':';
    digitalHour.innerHTML = dateObj.hours + ':';
}
function setDate(){
    var dateObj = getDateVars();
    updateClock(dateObj);
}

