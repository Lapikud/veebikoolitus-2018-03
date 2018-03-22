"use strict;"

let lastBookId = 0;

function loaded() {
    console.log("Page has loaded");

    let formEl = document.getElementById('formEl');
    formEl.addEventListener('submit', onBookAdd, false)
}

function onBookAdd(event) {
    event.preventDefault();
    console.log("Add book")
    let bookListBody = document.getElementById('bookListBody');
    row = `
<tr id="bookRow${lastBookId}">
    <td>${lastBookId + 1}</td>
    <td>${event.target.bookTitle.value}</td>
    <td>${event.target.bookGenre.value}</td>
    <td>${event.target.bookDesc.value}</td>
    <td>
        <button>Edit</button>
        <button onclick="onBookDelete(${lastBookId})">Delete</button>
    </td>
</tr>
`

    bookListBody.insertAdjacentHTML("beforeend", row);

    lastBookId++;
}

function onBookDelete(bookId) {
    console.log("Delete book")
    let bookListBody = document.getElementById('bookListBody');
    let bookRow = document.getElementById('bookRow'+bookId);
    bookListBody.removeChild(bookRow);
}

document.addEventListener("DOMContentLoaded", loaded);
