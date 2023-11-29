// const input = document.querySelector('#input');
const booksList = document.querySelector('.sund-books');
// const btnAddBook = document.querySelector('#btn__add');
// btnAddBook.addEventListener('click', addBookToLibrary)
const addBook = document.querySelector('#btn-add-book');
addBook.addEventListener('click', displayForm);
const submitBook = document.querySelector('#submit-book');
submitBook.addEventListener('click', submitForm);
const formWrapper = document.querySelector('.sund-new-book__wrapper');

const bookAuthor = document.querySelector('#author');
const booktitle = document.querySelector('#title');
const bookpages = document.querySelector('#pages');
const bookreadOrNot = document.querySelector('#readOrNot');

document.querySelector('.sund-new-book__overlay').addEventListener('click', hideForm);
const myLibrary = [];

function Book(author, title, pages, readOrNot) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

function displayForm(){
    formWrapper.classList.add('active')
}
function hideForm(){
    formWrapper.classList.remove('active');
}
document.addEventListener("keydown", (event) => {
    // console.log(`key=${event.key},code=${event.code}`);
    if(event.key === 'Escape'){
        hideForm();
    }
});
function clearForm(){
    bookAuthor.value = '';
    booktitle.value = '';
    bookpages.value = '';
    bookreadOrNot.checked = false;
}
function submitForm(e){
    e.preventDefault();
    myLibrary.push(new Book(bookAuthor.value, booktitle.value, bookpages.value, bookreadOrNot.checked))
    hideForm();
    clearForm();
    console.log(myLibrary);
    displayBooksinLibrary();
}

function displayBooksinLibrary(){
    booksList.innerHTML = '';
    for(let book of myLibrary){
        const bookCard = document.createElement('div')  ;
        bookCard.className = 'sund-book-card';


        const bookCardAuthor = document.createElement('div')  ;
        bookCardAuthor.className = 'sund-book-card__author';
        bookCardAuthor.innerText = book.author;  

        const bookCardTitle = document.createElement('div')  ;
        bookCardTitle.className = 'sund-book-card__title';
        bookCardTitle.innerText = book.title; 

        const bookCardPages = document.createElement('div')  ;
        bookCardPages.className = 'sund-book-card__pages';
        bookCardPages.innerText = book.pages; 

        const bookreadOrNot = document.createElement('div')  ;
        bookreadOrNot.className = 'sund-book-card__read';
        bookreadOrNot.innerText = book.readOrNot; 

        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookreadOrNot);

        booksList.appendChild(bookCard);
    }
}