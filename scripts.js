// const input = document.querySelector('#input');
// const booksList = document.querySelector('.sund-books');
// const btnAddBook = document.querySelector('#btn__add');
// btnAddBook.addEventListener('click', addBookToLibrary)
const addBook = document.querySelector('#btn-add-book');
addBook.addEventListener('click', displayForm);
const submitBook = document.querySelector('#submit-book');
submitBook.addEventListener('click', submitForm);
const formWrapper = document.querySelector('.sund-new-book__wrapper');
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
function submitForm(){
    hideForm();
}
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