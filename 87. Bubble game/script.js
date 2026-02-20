let hitrn = 0;

function makeBubble() {
    let clutter = "";

    for (let i = 0; i <= 76; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

makeBubble();

let timer = 60;
function runTimer() {
    let timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over!!</h1>";
        }
    }, 1000);
}

runTimer();

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

getNewHit();

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
    let clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});