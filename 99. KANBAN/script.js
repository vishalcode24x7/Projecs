let tasksdata = {}
const doto = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const columns = [doto, progress, done];
let draggedItem = null;

function addTask(title, desc, column) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `<h2>${title}</h2>
                    <p>${desc}</p>
                    <button>Delete</button>
    `
    column.appendChild(div);

    div.addEventListener("drag", (e) => {
        draggedItem = div;
    });

    const deleteBtn = div.querySelector("button");
    deleteBtn.addEventListener("click", () => {
        div.remove();
        updateTaskCount();
    })

    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");

            tasksdata[col.id] = Array.from(tasks).map(t => {
                return {
                    title: t.querySelector("h2").innerText,
                    desc: t.querySelector("p").innerText
                }
            })
            localStorage.setItem("tasks", JSON.stringify(tasksdata));
            count.innerText = tasks.length;
        })
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        })

    }
    updateTaskCount();
}

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
    task.addEventListener("drag", (e) => {
        draggedItem = task;
    })
})

function addDragEven(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.appendChild(draggedItem);
        column.classList.remove("hover-over");

        updateTaskCount();

    })
}

addDragEven(doto);
addDragEven(progress);
addDragEven(done);

const toggleModalBtn = document.querySelector("#toggle-modal");
const modalbg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addtaskbtn = document.querySelector("#add-new-task");

toggleModalBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
})

modalbg.addEventListener("click", () => {
    modal.classList.remove("active");
})

addtaskbtn.addEventListener("click", () => {
    const tasktitle = document.querySelector(".modal input").value;
    const taskdesc = document.querySelector(".modal textarea").value;

    addTask(tasktitle, taskdesc, doto);

    updateTaskCount();

    modal.classList.remove("active");
    div.addEventListener("drag", (e) => {
        draggedItem = div;
    });

    document.querySelector(".modal input").value = "";
    document.querySelector(".modal textarea").value = "";
})