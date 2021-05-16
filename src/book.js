class Book {
    constructor(book) {
        this.id = book.id
        this.name = book.name
        this.author_id = book.author_id
        this.li = document.createElement('li')
    }



    static createBook(e){
        e.preventDefault()
        const bookInput = e.target.children.input.value
        const bookAuthor = document.getElementById("book-author")
        const authorId = e.target.parentElement.id
        
        Book.postBooks(bookInput, authorId)

        e.target.reset()
    }

    static postBooks(book, authorId) {
        fetch(booksURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({book: {
                name: book,
                author_id: authorId
            }})
        })
        .then(resp => resp.json())
        .then(book => {
            // debugger
            let newBook = new Book(book)
            let bookAuthor = document.getElementById(`book-author-${book.author_id}`)
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

    

    

