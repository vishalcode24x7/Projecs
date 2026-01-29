let center = document.querySelector("#center")
const natureImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * natureImages.length);
    return natureImages[randomIndex];
}

const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...arg) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...arg);
        }
    }
}

center.addEventListener("mousemove", throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    let img = document.createElement("img");
    img.setAttribute("src", getRandomImage());
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .6
    });
    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2,
        // duration: .2
    });

    setTimeout(() => {
        div.remove();
    }, 1500);
}, 600))