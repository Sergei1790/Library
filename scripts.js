// const input = document.querySelector('#input');
// const booksList = document.querySelector('.sund-books');
// const btnAddBook = document.querySelector('#btn__add');
// btnAddBook.addEventListener('click', addBookToLibrary)
const addBook = document.querySelector('#btn-add-book');
addBook.addEventListener('click', displayForm);
const submitBook = document.querySelector('#submit-book');
submitBook.addEventListener('click', submitForm);
const formWrapper = document.querySelector('.sund-new-book__wrapper');

const bookAuthor = document.querySelector('#author;');
const booktitle = document.querySelector('#title;');
const bookpages = document.querySelector('#pages;');
const bookreadOrNot = document.querySelector('#readOrNot;');

document.querySelector('.sund-new-book__overlay').addEventListener('click', hideForm);
// const btnCreateLib = document.querySelector('#btn-create-lib');
// btnCreateLib.addEventListener('click', displayBooksinLibrary)
const myLibrary = [];

function Book() {
  // the constructor...
}

function displayForm(){
    formWrapper.classList.add('active')
}
function hideForm(){
    formWrapper.classList.remove('active');
}
document.addEventListener("keydown", (event) => {
    console.log(`key=${event.key},code=${event.code}`);
    if(event.key === 'Escape'){
        hideForm();
    }
});
function clearForm(){
    formWrapper.find('inpu')
}
function submitForm(e){
    e.preventDefault();
    hideForm();
    clearForm();
}
// window.addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     let bookForm = document.querySelector(".sund-new-book");
//     let formOpen = document.querySelector(".btn-add-book");
//     if (!bookForm.contains(e.target) && !formOpen.contains(e.target)){
//         hideForm();
//     } 
// })
// function addBookToLibrary() {
//     myLibrary.push(input.value);
//     const bookCard = document.createElement('div')  ;
//     bookCard.className = 'sund-book-card';
//     bookCard.innerText = input.value;  
//     booksList.appendChild(bookCard);
//     input.value = '';
// }
// function displayBooksinLibrary(){
//     for(let book of myLibrary){
//         const bookCard = document.createElement('div')  ;
//         bookCard.className = 'sund-book-card';
//         bookCard.innerText = book;  
//         booksList.appendChild(bookCard);
//     }
// }