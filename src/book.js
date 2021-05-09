class Book {
    constructor(book) {
        this.id = book.id
        this.name = book.name
        this.genre = book.genre
        this.published = book.published
        this.author_id = book.author_id
        this.li = document.createElement('li')
    }

//     bookHTML() {
//         return `<li id="${this.id}">${this.name} ${this.genre} ${this.published}</li>`
//       }


    static createBook(e){
        e.preventDefault()
        const bookInput = e.target.children.input.value
        const bookAuthor = document.getElementById("book-author")
        const authorId = e.target.parentElement.dataset.id
        Book.postBooks(bookInput, bookAuthor, authorId)

        e.target.reset()
    }

    static postBooks(book, bookAuthor, authorId) {
        fetch(booksURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: book, 
                author_id: authorId
            })
        })
        .then(resp => resp.json())
        .then(book => {
            let newBook = new Book(book.data)
            newBook.createBookCard(bookAuthor)
        })
        .catch(err => alert(err))
    }

    createBookCard(bookAuthor) {
        this.li.id = this.author_id
        this.li.className = "py-4 subpixel-antialiased font-medium col-span-10 my-2 px-2 bg-white w-5/12 rounded border-green-300 shadow-inner fst-italic"
        this.li.innerHTML = `${this.name}`
    
        const deleteBtn = document.createElement('button')
        deleteBtn.className = "ml-2 px- float-right p-2 pt-0 mt-1 ml-2 hover:opacity-50 shadow-sm hover:shadow-sm"
        deleteBtn.innerHTML = `<i class="fa fa-trash-alt"></i>`
        deleteBtn.addEventListener("click", (_event) => { this.deleteBook() })
        this.li.appendChild(deleteBtn)
        bookAuthor.appendChild(this.li)
    }


    deleteBook() {
        fetch(`${booksURL}/${this.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        this.li.remove()
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

//    


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