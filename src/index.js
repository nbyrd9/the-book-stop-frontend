const header = document.getElementById("header")
const form = document.getElementById('authorForm')
const mainContainer = document.getElementById('container')

form.addEventListener('submit', Author.createAuthor)
header.addEventListener('click', reset)

function reset(){
  mainContainer.innerHTML = ''
  mainContainer.innerHTML += `<form id="authorForm">
    <label for="">Name:</label>
    <input type="text" id="authorName">
    <input type="submit" >
  </form>`
  addListeners()
}

function addListeners() {
    const form = document.getElementById('authorForm')
    const div = document.createElement('div')
    div.id = "authorContainer"
    mainContainer.append(div)
    form.addEventListener('submit', Author.createAuthor)
   Author.renderAuthors()
}


Author.fetchAuthors()
