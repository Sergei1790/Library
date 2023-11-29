const input = document.querySelector('#input');
const booksList = document.querySelector('.sund-books');
const btnAddBook = document.querySelector('#btn__add');
btnAddBook.addEventListener('click', addBookToLibrary)
// const btnCreateLib = document.querySelector('#btn-create-lib');
// btnCreateLib.addEventListener('click', displayBooksinLibrary)
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
    myLibrary.push(input.value);
    const bookCard = document.createElement('div')  ;
    bookCard.className = 'sund-book-card';
    bookCard.innerText = input.value;  
    booksList.appendChild(bookCard);
    input.value = '';
}
// function displayBooksinLibrary(){
//     for(let book of myLibrary){
//         const bookCard = document.createElement('div')  ;
//         bookCard.className = 'sund-book-card';
//         bookCard.innerText = book;  
//         booksList.appendChild(bookCard);
//     }
// }
