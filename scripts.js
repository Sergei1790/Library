const booksList = document.querySelector('.sund-books');
const addBook = document.querySelector('#btn-add-book');
addBook.addEventListener('click', displayForm);
const submitBook = document.querySelector('#submit-book');
const formWrapper = document.querySelector('.sund-new-book__wrapper');
const formInputs = document.querySelectorAll('.sund-new-book__wrapper input');

const bookAuthor = document.querySelector('#author');
const booktitle = document.querySelector('#title');
const bookpages = document.querySelector('#pages');
const bookreadOrNot = document.querySelector('#readOrNot');

document.querySelector('.sund-new-book__overlay').addEventListener('click', hideForm);

// function Book(author, title, pages, readOrNot) {
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.readOrNot = readOrNot;
// }
// Book.prototype.toggleReadOrNot = function() {
//     this.readOrNot = !this.readOrNot;
//     console.log(myLibrary);
// };

class Book {
    constructor(author, title, pages, readOrNot) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readOrNot = readOrNot;
    }
    toggleReadOrNot() {
        this.readOrNot = !this.readOrNot;
    }
}

// Initialization
let myLibrary = [];
const storedBooks = localStorage.getItem('myLibrary');
if (storedBooks) {
    myLibrary = JSON.parse(storedBooks).map((book) => new Book(book.author, book.title, book.pages, book.readOrNot));
}

displayBooksinLibrary();
function displayForm() {
    formWrapper.classList.add('active');
}
function hideForm() {
    formWrapper.classList.remove('active');
}
document.addEventListener('keydown', (event) => {
    // console.log(`key=${event.key},code=${event.code}`);
    if (event.key === 'Escape') {
        hideForm();
    }
});
function clearForm() {
    document.getElementById('sund-new-book').reset();
    // bookAuthor.value = '';
    // booktitle.value = '';
    // bookpages.value = '';
    // bookreadOrNot.checked = false;
}
function submitForm() {
    myLibrary.push(new Book(bookAuthor.value, booktitle.value, bookpages.value, bookreadOrNot.checked));
    hideForm();
    clearForm();
    displayBooksinLibrary();
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function displayBooksinLibrary() {
    booksList.innerHTML = '';
    for (let book of myLibrary) {
        const bookIndex = myLibrary.indexOf(book);

        const bookCard = document.createElement('div');
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
        bookRemove.innerText = 'Remove book';
        bookRemove.className = 'sund-book__remove';
        bookRemove.addEventListener('click', removeBook);

        const bookStatus = document.createElement('button');
        bookStatus.innerText = 'Read';
        bookStatus.className = 'sund-book__status';

        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookreadOrNot);
        bookCard.appendChild(bookRemove);
        bookCard.appendChild(bookStatus);

        booksList.appendChild(bookCard);

        bookStatus.addEventListener('click', function () {
            book.toggleReadOrNot();
            bookreadOrNot.textContent = book.readOrNot;
            bookCard.classList.toggle('isRead');
        });
    }
}
function removeBook() {
    const bookCard = this.closest('.sund-book-card');
    const dataIndex = parseInt(bookCard.getAttribute('data-index'), 10);
    myLibrary.splice(dataIndex, 1);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    displayBooksinLibrary();
}

// validation
// Calling the submit() method on the HTMLFormElement interface doesn't trigger
//  a constraint validation. In other words, this method sends 
// the form data to the server even if it doesn't satisfy the constraints. 
// Call the click() method on a submit button instead.
submitBook.addEventListener('click', (e) => {
    formInputs.forEach((input) => {
        if (input.nextElementSibling){
            input.nextElementSibling.style.display = 'none';
        }
        if (!input.validity.valid){
            input.nextElementSibling.style.display = 'block';
        } 
    })
    if (Array.from(formInputs).every((input) => input.validity.valid)) {
        submitForm();
    } else {
        e.preventDefault();
        // alert('Please fill in all fields');
        console.log('Please fill in all fields');
    }
});
