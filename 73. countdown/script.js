let h1 = document.querySelector("h1");

let btn = document.querySelector(".start");

let count = 10;

btn.addEventListener("click", function(){

let interval = setInterval(function(){
    if(count > 1){
        count --;
        // console.log(count);
        h1.textContent = count
    }else{
        clearInterval(interval);
        h1.textContent = "Start";
    }
}, 1000);

});