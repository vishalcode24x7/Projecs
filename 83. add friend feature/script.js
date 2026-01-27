let istatus = document.querySelector("h5")
let add = document.querySelector("#add")

let check = 0;


add.addEventListener("click", function () {
    if (check === 0) {
        istatus.innerText = "Friends"
        istatus.style.color = "green"
        add.innerText = "Friend Added"
        add.style.backgroundColor = "gray"
        check = 1;
    }else{
        istatus.innerText = "Stranger"
        istatus.style.color = "red"
        add.innerText = "Add Friend"
        add.style.backgroundColor = "rgb(77, 185, 189)"
        check = 0;
    }
});
