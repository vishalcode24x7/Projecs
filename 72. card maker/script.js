let form = document.getElementById("cardForm");
let container2 = document.querySelector(".container2");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    // Input values ko get karo
    let imgUrl = document.getElementById("imgUrl").value;
    let name = document.getElementById("name").value;
    let occupation = document.getElementById("occupation").value;
    let info = document.getElementById("info").value;

    // Card create karo
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    // Sahi tarike se img tag create karo
    let img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", name);

    let h3 = document.createElement("h3");
    h3.textContent = name;

    let h5 = document.createElement("h5");
    h5.textContent = occupation;

    let p = document.createElement("p");
    p.textContent = info;

    // Elements ko append karo
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    container2.appendChild(card);

    // Form ko reset karo
    form.reset();
});