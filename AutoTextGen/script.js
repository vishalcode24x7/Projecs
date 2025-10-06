const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

// console.log(typedText);
// console.log(cursor);/

let words = ["Awesome", "Fun", "Cool", "Life", "Famous"];
const typingDelay = 60;
const erasingDelay = 50;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    if (words.length) setTimeout(type, newLetterDelay + 250);
});

function type() {
    if (charIndex < words[index].length) {
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        index++;
        if (index >= words.length)
            index = 0;
        setTimeout(type, typingDelay + 1100);

    }
}