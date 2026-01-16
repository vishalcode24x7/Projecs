let inputbox = document.querySelector("input");
let output = document.querySelector("span")

inputbox.addEventListener("input", function () {
    output.textContent = inputbox.value.length
})