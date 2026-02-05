const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemC = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = 'block';
    console.log("hello")
})

elemC.addEventListener("mouseleave", function(){
    fixed.style.display = 'none';
    console.log("by")
})


let elems = document.querySelectorAll(".elem")
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
