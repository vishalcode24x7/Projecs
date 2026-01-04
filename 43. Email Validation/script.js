let input = document.getElementById("inputBox");

input.addEventListener("keydown", validate)

function validate() {
    let form = document.querySelector('.mainform');
    let patttern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value.match(patttern)) {
        {
            form.classList.add("valid");
            form.classList.remove("invalid");
        }
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}

