let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
});