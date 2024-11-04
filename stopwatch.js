const display = document.getElementById("dispaly");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;

    }
    console.log(startTime);

}

function stop() {

}
function reset() {

}

function update() {

}