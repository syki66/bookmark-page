const bookmarkForm = document.querySelector(".js-bookMarkForm"),
    bookmarkInput = bookmarkForm.querySelectorAll("input"),
    bookMarkList = document.querySelector(".js-bookMarkList");

const BOOKMARK_LS = "bookmark";

let bookmarks = [];

function deleteBookmark(event){
    const btn = event.target;
    const li = btn.parentNode;
    bookMarkList.removeChild(li);
    const cleanBookmarks = bookmarks.filter(function (bookmark){
        return bookmark.id !== parseInt(li.id);
    });
    bookmarks = cleanBookmarks;
    saveBookmarks();
}

function paintBookmark (name, link) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const newId = bookmarks.length + 1;
    const delBtn = document.createElement("button");

    delBtn.innerText = "삭제"
    delBtn.addEventListener("click", deleteBookmark);

    a.innerText = name;
    a.href = link;

    li.appendChild(delBtn);
    li.appendChild(a);
    bookMarkList.appendChild(li);

    li.id = newId;

    const bookMarksObj = {
        siteName : name,
        hyperlink : link,
        id : newId
    };
    
    bookmarks.push(bookMarksObj);
    saveBookmarks();
}

function saveBookmarks () {
    localStorage.setItem(BOOKMARK_LS, JSON.stringify(bookmarks));
}

function loadBookmarks () {
    const loadedBookMark = localStorage.getItem(BOOKMARK_LS);
    if (loadedBookMark !== null) {
        const parsedBookmarks = JSON.parse(loadedBookMark);
        parsedBookmarks.forEach(function (bookmark) {
            paintBookmark(bookmark.siteName, bookmark.hyperlink);
        })
    } else {
        
    }
}

function submit_bookMarkHandle(event){
    event.preventDefault();
    paintBookmark(bookmarkInput[0].value, bookmarkInput[1].value);
    bookmarkInput[0].value = "";
    bookmarkInput[1].value = "";
}

function init() {
    loadBookmarks();
    bookmarkForm.addEventListener("submit", submit_bookMarkHandle);
}

init();