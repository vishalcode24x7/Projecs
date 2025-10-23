const inputBox = document.getElementById("input-box");
const addButton = document.querySelector("button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function() {
    const taskText = inputBox.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();
    }
});

taskList.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//This function is used for save data after reloading
function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

//This funcion is used for save data data every time
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();