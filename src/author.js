

//     function appendAuthors(authors){
//         const authorsDiv = document.getElementById('AuthorContainer')
//         for (let author of authors) {
//             const li = document.createElement("li")
//             li.innerText = author.name
//             authorsDiv.append(li)
//             appendBooks(author.books, li)
//         }
//     }


const authorFormFields = `
<label> <strong>Name: </strong></label> <br/>
<input type="text" id="name"> <br/> `

class Author {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.books = data.books.map(book => new Book (book))
        Author.allAuthors.push(this)
    }


    static newAuthorForm() {
        let newAuthorFormDiv = document.getElementById('author-form')
        newAuthorFormDiv.innerHTML = `
        <form onsubmit="createAuthor(); return false;">` + 
    authorFormFields + 
    `<input type="submit" value="Add New Author">
    </form>
    <br/>`
    }

    static editAuthorForm() {
        let editAuthorFormDiv = document.getElementById('author-form')
            editAuthorFormDiv.innerHTML = `
            <form onsubmit="updateAuthor(); return false;">` + 
            authorFormFields + 
            `<input type="submit" value="Update Info">
            </form>
            <br/>`
        }
}

function fetchAuthors(){
    fetch("http://localhost:3000/authors")
    .then(r => r.json())
    .then(data => {
        renderAuthorsHtml(data)
        addAuthorsClickListeners()
        addBooksClickListeners()
    })
} 

function createAuthor() {
    const author = {
        name: document.getElementById('name').value
    }

    fetch("http://localhost:3000/authors", {
        method: 'POST',
        body: JSON.stringify(author),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json() )
    .then(author => {
         clearAuthorsHtml()
         getAuthors()
        Author.newAuthorForm()
      });
    
}

function updateAuthor() {
    let authorId = this.event.target.authorId.value

    const author = {
        name: document.getElementById('name').value
    }


    fetch(`http://localhost:3000/${authorId}`, {
        method: 'PATCH',
        body: JSON.stringify(author),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json() )
    .then(author => {
         clearAuthorsHtml()
         getAuthors()
         Author.newAuthorForm()
        });
}

function editAuthor() {
    let authorId = this.parentElement.getAttribute('data-author-id')

        fetch(`http://localhost:3000/${authorId}`)
        .then(resp => resp.json())
        .then(data => {
            Author.editAuthorForm()
            let authorForm = document.getElementById('author-form')
            authorForm.querySelector('#name').value = data.name 
        })
}

function deleteAuthor() {
    let authorId = this.parentElement.getAttribute('data-author-id')
    
    fetch(`http://localhost:3000/${authorId}`, {
        method: 'DELETE'
      })
      .then(resp => resp.json())
      .then(json => {
          let selectedAuthor = document.querySelector(`.card[data-author-id="${authorId}"]`) 
          selectedAuthor.remove()
      })
}

//EVENT LISTENERS
function addAuthorsClickListeners() {
    document.querySelectorAll('.author-name').forEach(element => {
       element.addEventListener("click", showMoreInfo)
   })

   document.querySelectorAll('.edit-author-button').forEach(element => {
       element.addEventListener("click", editAuthor)
   })

   document.querySelectorAll('.delete-author-button').forEach(element => {
       element.addEventListener("click", deleteAuthor)
   })


   function renderAuthorsHtml(data) {
    let authorsIndex = document.getElementById("authors-list")

    data.forEach((author) => {
  
        let booksIndexHtml = document.createElement('div')
        booksIndexHtml.className = 'books'
        booksIndexHtml.style.display = 'none'
        let emptyBooksHtml = booksIndexHtml
          

        let newAuthor = new Author(author)
        booksIndexHtml.innerHTML = newAuthor.authorBooksHtml()     
   
        authorsIndex.innerHTML += newAuthor.authorHtml() 
   
        let selectedAuthorHtml = document.querySelector(`.card[data-author-id="${newAuthor.id}"]`)           
        selectedAuthorHtml.append(booksIndexHtml.childElementCount ? booksIndexHtml : emptyBooksHtml )
        selectedAuthorHtml.querySelector('.books').appendChild(newAuthor.addBooksButton())
    });
}