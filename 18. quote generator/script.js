const quote = document.getElementById("Quote");
const author = document.getElementById("Author");
const api_url = "https://quotes-api-self.vercel.app/quote";

async function getquote(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML, "Tweet window", "width=600, height=300");
}