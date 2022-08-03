var startingTime = window.prompt('Enter how many minutes: ');
let time = startingTime * 60;

const countdownEl = document.getElementById("countdown");


setInterval(updateCountdown, 50);

function updateCountdown(){

    if(time < 0) {
        console.log('Timer is Done');
        return;
    }

    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    


    countdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;
}

function done(){

}
