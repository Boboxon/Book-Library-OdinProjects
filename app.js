const title = document.getElementById("title");
const author = document.getElementById("author");
const number = document.getElementById("number");
const status = document.getElementById("checkbox");
const submitButton = document.getElementById("submit-book");
const bookList = document.getElementById("book-list");
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
});

const library = [];

//cretating Constructor
function Book(title, author, number, status) {
  this.title = title;
  this.author = author;
  this.number = number;
  this.status = status;
}

function addBookToLibrary() {
  const newBook = new Book(title.value, author.value, number.value);

  library.push(newBook);
}

function render() {
  library.forEach((book) => {
    const Book = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.number}</td>
      
      <td><button class="delete btn btn-danger">delete</button></td>
    </tr>
    `;

    bookList.insertAdjacentHTML("afterbegin", Book);
  });
}
