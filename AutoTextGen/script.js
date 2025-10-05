const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

// console.log(typedText);
// console.log(cursor);/

let words = ["Awesome", "Fun", "Cool", "Life", "Famous"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

function type() {
    if(charIndex < words[index.length]){
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        settimeout(erase, newLetterDelay);
    }
}

function erase() {
    if(charIndex > 0){
        typedText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);            
    }
    else{
        index++;
        if(index >= words.length) 
        index = 0;
    }
    setTimeout(type, typingDelay + 1100);
}