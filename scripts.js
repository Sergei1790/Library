const booksList = document.querySelector('.sund-books');
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
Book.prototype.toggleReadOrNot = function() {
    this.readOrNot = !this.readOrNot;
    console.log(myLibrary);
};

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
    displayBooksinLibrary();
}

function displayBooksinLibrary(){
    booksList.innerHTML = '';
    for(let book of myLibrary){
        const bookIndex = myLibrary.indexOf(book);

        const bookCard = document.createElement('div')  ;
        bookCard.className = 'sund-book-card';
        bookCard.setAttribute('data-index', bookIndex);

        const bookCardAuthor = document.createElement('div');
        bookCardAuthor.className = 'sund-book-card__author';
        bookCardAuthor.innerText = book.author;  

        const bookCardTitle = document.createElement('div');
        bookCardTitle.className = 'sund-book-card__title';
        bookCardTitle.innerText = book.title; 

        const bookCardPages = document.createElement('div');
        bookCardPages.className = 'sund-book-card__pages';
        bookCardPages.innerText = book.pages; 

        const bookreadOrNot = document.createElement('div');
        bookreadOrNot.className = 'sund-book-card__read';
        bookreadOrNot.innerText = book.readOrNot; 

        const bookRemove = document.createElement('button');
        bookRemove.innerText = 'Remove book'
        bookRemove.className = 'sund-book__remove';
        bookRemove.addEventListener('click', removeBook);

        const bookStatus = document.createElement('button');
        bookStatus.innerText = 'Read'
        bookStatus.className = 'sund-book__status';

        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookreadOrNot);
        bookCard.appendChild(bookRemove);
        bookCard.appendChild(bookStatus);

        booksList.appendChild(bookCard);

        bookStatus.addEventListener('click', function() {
            book.toggleReadOrNot();
            bookCard.classList.toggle('isRead');
        });
    }
}
function removeBook(){
    const bookCard = this.closest('.sund-book-card');
    const dataIndex = parseInt(bookCard.getAttribute('data-index'), 10);
    myLibrary.splice(dataIndex, 1);
    displayBooksinLibrary(); 
}

