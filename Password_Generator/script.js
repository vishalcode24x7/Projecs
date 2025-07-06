let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById('slidervalue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let Uppercase  = document.getElementById('Uppercase');
let Numbers = document.getElementById('Numbers');
let Symbols = document.getElementById('Symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

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
let symbol = "@_."


//function for generate password
function generatePassword(){
    let genPassword = "";
    let allChar = "";

    allChar += Uppercase.checked ? upper : "";
    allChar += lowercase.checked ? lower : "";
    allChar += Numbers.checked ? num : "";
    allChar += Symbols.checked ? symbol : "";

    if(allChar == "" || allChar.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputslider.value){
    genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
    i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != ""){
    navigator.clipboard.writeText(passBox.value);
    // copyIcon.innerHTML = "check";
    copyIcon.title = "copied";
    }
});