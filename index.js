// Button identifiers
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let setTimer = document.getElementById("time-set");


// more dom 
let display = document.getElementById('time');



// other Declerations
let times = [10, 15, 20, 25];
let timesCount = 0;
let ongoing = false;
let currentMin = 0;
let currentSec = 0;


//button events
start.onclick = function () {
    ongoing = !ongoing;
    if (ongoing == true) {
        startTimer(times[timesCount] * 60, display);
        start.classList.add("red");
        start.innerText = "Stop";

    }
    else {
        start.classList.remove("red");
        start.innerText = "Start";
        clearInterval(myTimer);

    }

    console.log("start button");
    //startTimer(times[timesCount] * 60, display);

    console.log(ongoing);



}

reset.onclick = function () {
    console.log("reset button");

}
setTimer.onclick = function () {
    console.log("time set button");
    timesCount++;
    if (timesCount > 3) {
        timesCount = 0;
    }
    display.innerText = times[timesCount] + ":00"
    setTimer.innerText = times[timesCount] + " mins";


}



// timer logic

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myTimer = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);


}

window.onload = function () {
    currentMin = times[timesCount] * 60;
    console.log(currentMin);
}