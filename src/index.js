const authorsURL = 'http://localhost:3000/authors'
const booksURL = 'http://localhost:3000/books'
const authorForm = document.getElementById("create-author-form")
const authorInput = document.getElementById("author-input")
const bookAuthor = document.createElement('ul')



Author.fetchAuthors()

authorForm.addEventListener("submit", Author.postAuthors)

 

