let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById('slidervalue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let Uppercase  = document.getElementById('Uppercase');
let Numbers = document.getElementById('Numbers');
let Symbols = document.getElementById('Symbols');
let genBtn = document.getElementById('genBtn');

//used for show slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent = inputslider.value
})

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})


let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789"
let Symbol = "@_."


//function for generate password
function generatePassword(){
    let genPassword = "";

    genPassword = upper.charAt(Math.floor(Math.random()*upper.length));
    return genPassword;
}