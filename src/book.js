// function appendBooks(books, element){
    
//    for (let book of books){
       
//        const bookLi = document.createElement("li")
//        bookLi.innerText = book.name
//         element.append(bookLi)
//    }
    

// }

class Book {
    constructor(data) {
        this.name = data.name
        this.genre = data.genre
        this.published = data.published
        this.author_id = data.author_id
    }
}

function addBook(){
    const book = {
        name: document.getElementById('name').value,
        genre: document.getElementById('book-genre').value,
        published: document.getElementById('book-published').value,
        author_id: document.getElementById('book-author_id').value,
    }

    fetch("http://localhost:3000/books", {
        method: 'POST',
        body: JSON.stringify(book),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
    .then(resp => resp.json())
    .then(book => {
         clearAuthorsHtml()
         getAuthors()
      });

      function renderBookFormFields(authorId) {
        return `<label><strong>Name: </strong></label><br/>
        <input type="text" id="name"><br/>
        <input type="hidden" id="book-authorId" value="${authorId}">
        <label><strong>Genre:   </strong></label><br/>
        <input type="text" id="book-genre"><br/>  
        <label><strong>Published:   </strong></label><br/>
        <input type="text" id="book-published"><br/>  
        <input type="submit" value="Submit" >
        `  
    }
    
    function renderNewBookForm() {
        let authorId = this.getAttribute('id')
        this.style.display = "none"
        let booksHtml = this.parentElement
        let bookForm = document.createElement('form')
        bookForm.setAttribute("onsubmit", "addBook(); return false;")
        bookForm.innerHTML = renderBookFormFields(authorId)
        booksHtml.appendChild(bookForm)
    }

    function addBooksClickListeners() {
        document.querySelectorAll('.view-books-author-button').forEach(element => {
            element.addEventListener('click', viewAuthorBooks)
        })
    
        document.querySelectorAll('.add-book-button').forEach(element => {
            element.addEventListener('click', renderNewBookForm)
        })
        
        document.querySelectorAll('.edit-book-button').forEach(element => {
            element.addEventListener("click", editBook)
        })
    
        document.querySelectorAll('.delete-book-button').forEach(element => {
            element.addEventListener("click", deleteBook)
        })
    
    }
     
}