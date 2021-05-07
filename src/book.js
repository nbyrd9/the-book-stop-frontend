// function appendBooks(books, element){
    
//    for (let book of books){
       
//        const bookLi = document.createElement("li")
//        bookLi.innerText = book.name
//         element.append(bookLi)
//    }
    

// }

class Book {
    constructor(data) {
        this.id = data.id
        this.name = data.attributes.name
        this.genre = data.attributes.genre
        this.published = data.attributes.published
        this.author_id = data.attributes.author_id
    }

    bookHTML() {
        return `<li id="${this.id}">${this.name} ${this.genre} ${this.published}</li>`
      }
}

// function addBook(){
//     const book = {
//         name: document.getElementById('name').value,
//         genre: document.getElementById('book-genre').value,
//         published: document.getElementById('book-published').value,
//         author_id: document.getElementById('book-author_id').value,
//     }

//     fetch("http://localhost:3000/books", {
//         method: 'POST',
//         body: JSON.stringify(book),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//     .then(resp => resp.json())
//     .then(book => {
//          clearAuthorsHtml()
//          getAuthors()
//       });

//       function renderBookFormFields(authorId) {
//         return `<label><strong>Name: </strong></label><br/>
//         <input type="text" id="name"><br/>
//         <input type="hidden" id="book-authorId" value="${authorId}">
//         <label><strong>Genre:   </strong></label><br/>
//         <input type="text" id="book-genre"><br/>  
//         <label><strong>Published:   </strong></label><br/>
//         <input type="text" id="book-published"><br/>  
//         <input type="submit" value="Submit" >
//         `  
//     }
    
//     function renderNewBookForm() {
//         let authorId = this.getAttribute('id')
//         this.style.display = "none"
//         let booksHtml = this.parentElement
//         let bookForm = document.createElement('form')
//         bookForm.setAttribute("onsubmit", "addBook(); return false;")
//         bookForm.innerHTML = renderBookFormFields(authorId)
//         booksHtml.appendChild(bookForm)
//     }

//     function addBooksClickListeners() {
//         document.querySelectorAll('.view-books-author-button').forEach(element => {
//             element.addbookListener('click', viewAuthorBooks)
//         })
    
//         document.querySelectorAll('.add-book-button').forEach(element => {
//             element.addbookListener('click', renderNewBookForm)
//         })
        
//         document.querySelectorAll('.edit-book-button').forEach(element => {
//             element.addbookListener("click", editBook)
//         })
    
//         document.querySelectorAll('.delete-book-button').forEach(element => {
//             element.addbookListener("click", deleteBook)
//         })
    
//     }


//     function deleteBook() {
//         let bookId = this.parentElement.getAttribute('book-id')
    
//         fetch(`http://localhost:3000/${bookId}`, {
//             method: 'DELETE'
//           })
//           .then(resp => resp.json())
//           .then(json => {
//               let selectedBook = document.querySelector(`.card[book-id="${bookId}"]`) 
//               selectedBook.remove()
//           })
//     }
    
    
    
//     function updateBook() { 
//         let bookId = this.book.target.parentElement.getAttribute('book-id')     
//         let bookElement = document.querySelector(`.card[book-id="${bookId}"]`)
            
//          let book = {
//              title: bookElement.querySelector('#title').value, 
//              description: bookElement.querySelector('#book-description').value, 
//              author_id: bookElement.querySelector('#book-authorId').value,
//          }
           
    
//         fetch(`http://localhost:3000/books/${bookId}`, {
//             method: 'PATCH',
//             body: JSON.stringify(book),
//             headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//         })
//         .then(resp => resp.json() )
//         .then(data => {
//              clearAuthorsHtml()
//              getAuthors()  
//              Author.newAuthorForm()
//         })
//     }
    
//     function renderBookForm (authorId) {
//         let bookForm = document.createElement('form')
//         bookForm.setAttribute("onsubmit", "updateBook(); return false;")
//         bookForm.innerHTML = renderBookFormFields(authorId)
//         return bookForm 
//     }
    
    
//     function populateBookForm(data) { 
//         let book = new Book(data)
//         let bookForm = renderBookForm(book.author_id)
        
//         bookForm.querySelector('#name').value = book.name 
//         bookForm.querySelector('#book-genre').value = book.genre 
//         bookForm.querySelector('#book-author-Id').value = book.author_id 
//         document.querySelector(`.card[book-id="${book.id}"]`).appendChild(bookForm)
//     }
    
//     function editBook() { 
//         toggleHideDisplay(this)
    
//         let bookId = this.parentElement.getAttribute('book-id')

//         fetch(`http://localhost:3000/books/${bookId}`)
//         .then(resp => resp.json())
//         .then(data => {
//             populateBookForm(data)
//         })
//     }
//     function viewAuthorBooks() {
//         Author.newBookForm()
//         let authorSelectedHtml = this.parentElement.querySelector('.books')
//         toggleHideDisplay(authorSelectedHtml)
//     }
// }