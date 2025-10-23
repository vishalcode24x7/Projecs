const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 100);

    let text = [">>>Initialized Hacking now hacking your data",
        ">>>Reading your fils",
        ">>>password files ditected",
        ">>>Your system crashed",
        ">>>Sending all Passwords and files to server",
        ">>>Cleaning up"]
    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t);
}
main();