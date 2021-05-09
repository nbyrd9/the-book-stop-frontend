// const header = document.getElementById("header")
// const form = document.getElementById('authorForm')
// const mainContainer = document.getElementById('container')
const authorsURL = 'http://localhost:3000/authors'
const booksURL = 'http://localhost:3000/books'
const authorForm = document.getElementById("create-author-form")
const authorInput = document.getElementById("author-input")
const authorUL = document.getElementById("author-ul")
const bookAuthor = document.createElement('ul')


Author.fetchAuthors()

authorForm.addEventListener("submit", Author.postAuthors)
// header.addEventListener('click', reset)





// function reset(){
//   mainContainer.innerHTML = ''
//   mainContainer.innerHTML += `<form id="authorForm">
//     <label for="">Name:</label>
//     <input type="text" id="authorName">
//     <input type="submit" >
//   </form>`
//   addListeners()
// }

// function addListeners() {
//     const form = document.getElementById('authorForm')
//     const div = document.createElement('div')
//     div.id = "authorContainer"
//     mainContainer.append(div)
//     form.addEventListener('submit', Author.createAuthor)
//    Author.renderAuthors()
// }


