const submit = document.getElementById("submitBook");
let myLibrary = [];

//Book constructor
function Book(title, author, number) {
  this.title = title;
  this.author = author;
  this.number = number;
}

submit.addEventListener("click", addBook);

function addBook(e) {
  e.preventDefault();
  const titleName = document.getElementById("titleBook").value;
  const authorName = document.getElementById("author").value;
  const pageNumber = document.getElementById("pageNumber").value;

  let book = new Book(titleName, authorName, pageNumber);

  getBooks(book);
}

function getBooks(book) {
  const bookList = document.getElementById("bookList");

  //create Elemnt
  const row = document.createElement("tr");

  //insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.number}</td>
  <td> <a href = "#" class = ""delete>X</a> </td>`;
  console.log(book.number);

  bookList.appendChild(row);
}
