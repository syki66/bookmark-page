const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

const toDos = [];

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    } else {

    }
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();
