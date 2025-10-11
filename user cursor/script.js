const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', function(e) {
    moveCursor(e.pageX, e.pageY);
});

const moveCursor = function(pageX, pageY) {
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
}