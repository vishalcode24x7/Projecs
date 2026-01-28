let arr = [
    { dp: "https://images.unsplash.com/photo-1574149895874-6bda366dd1c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kbGV8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1574149895928-d02b21afb4d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kbGV8ZW58MHx8MHx8fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1726205646365-2be8a91adcfe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kbGV8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1726205649443-9ea79262f773?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kbGV8ZW58MHx8MHx8fDA%3D" },
    { dp: "https://plus.unsplash.com/premium_photo-1682002898857-54af3c135ba9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1663091903615-8dc22accf5a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" },
    { dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D" },
]

let storiya = document.querySelector("#storiya");
let story = document.querySelector("#full-screen");
let clutter = "";
arr.forEach((element, idx) => {
    clutter += `<div class="story">
                <img id="${idx}" src="${element.dp}" alt="">
            </div>`
});

storiya.innerHTML = clutter;

storiya.addEventListener("click", function (dets) {
    story.style.display = "block";
    story.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(() => {
        story.style.display = "none";
    }, 1500);
});