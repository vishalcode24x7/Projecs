const progressBar = document.getElementById('progress-bar');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeindex = 1;

nextbtn.addEventListener('click', () => {
    activeindex++;
    if (activeindex > circles.length) {
        activeindex = circles.length;
    }
    updateUI();
});

prevbtn.addEventListener('click', () => {
    activeindex--;
    if (activeindex < 1) {
        activeindex = 1;
    }
    updateUI();
});

function updateUI() {
    circles.forEach((circle, index) => {
        if (index < activeindex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (activeindex === 1) {
        prevbtn.disabled = true;
    } else if (activeindex === circles.length) {
        nextbtn.disabled = true;
    } else {
        prevbtn.disabled = false;
        nextbtn.disabled = false;
    }
}