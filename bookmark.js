const bookMarkForm = document.querySelector(".js-bookMarkForm"),
    bookMarkInput = bookMarkForm.querySelector("input"),
    bookMarkList = document.querySelector(".js-bookMarkList");


const BOOKMARK_LS = "bookMarks";



function paintBookMark (text) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.innerText = "text";
    li.appendChild(span);
}


function loadbookMark () {
    const loadedbookMark = localStorage.getItem(BOOKMARK_LS);
    if (loadedbookMark !== null) {
        paintBookMark();
    } else {

    }
}

function bookMarkHandleSubmit(event){
    event.preventDefault();
    const currentValue = bookMarkInput.value;
    paintBookMark(currentValue);
}

function init() {
    loadbookMark();
    bookMarkForm.addEventListener("submit", bookMarkHandleSubmit);
}

init();