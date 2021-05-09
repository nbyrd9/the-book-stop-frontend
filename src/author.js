class Author {
    
    static allAuthors = []


    constructor(data) {
        // debugger
        this.id = data.id
        this.name = data.name
        this.books = data.books
        Author.allAuthors.push(this)
    }

  


    static renderAuthors() {
        for (let author of this.allAuthors) {
            author.createAuthorCard()
        }
    }

    static getAuthors() {
        fetch(authorsURL)
        .then(r => r.json())
        .then(authors => {
            for (let author of authors) {
                let newAuthor = new Author(author.data)
            }
            this.renderAuthors() //removed one author after displaying two
        })

    }


    //   createBook(e){
    //       e.preventDefault()
    //       console.log(this) //this.id
    //       //1. what did the user enter and what is the value
    //       //2. fetch request and send data to backend
    //       //3. recieve request
    //       //4. finding element to add it to
    //       //5. create the element
    //       //6. append to DOM
    // //       const name = document.getElementById('bookName').value
    // //       const options = {
    // //         method: "POST",
    // //         headers: {
    // //           "Content-Type": "application/json",
    // //           "Accept": "application/json"
    // //         },
    // //         body: JSON.stringify({book: {name: name}})
    // //       }
      
    // //       document.getElementById('bookName').value = ""
      
    // //       fetch("http://localhost:3000/authors", options)
    // //       .then(r => r.json())
    // //       .then(bookObj => {
    // //         if (bookObj.data) {
    // //           let newList = new Book(bookObj.data)
    // //           newList.renderList()
    // //         } else {
    // //           throw new Error(bookObj.message)
    // //         }
      
    // //       }).catch((err) => alert(err))
    // //     }
    //   }


    static fetchAuthors(){
        fetch("http://localhost:3000/authors")
        .then(r => r.json())
        .then(authors => {
            for (let author of authors) {
                // debugger
                let newAuthor = new Author(author)
            }
            this.renderAuthors()
            
        })
        
    } 


    createAuthorCard() {
        const li = document.createElement('li')
        li.dataset.id = this.id
        li.className = "my-2 p-4 bg-pink-700 shadow rounded"

        const h1 = document.createElement('h1')
        h1.className = "text-3xl font-semibold text-gray-300 py-3 pt-0"
        h1.innerHTML = `${this.name}`
        
        
        const deleteBtn = document.createElement("button")
        deleteBtn.className = "text-xl float-right p-3 pt-0 mt-1 ml-4 hover:opacity-50 shadow-sm hover:shadow-lg"
        deleteBtn.innerHTML = `<i class="fa fa-trash-alt"></i>`
        deleteBtn.addEventListener("click", this.deleteAuthor)


        const bookAuthor = document.createElement('ul')
        // bookAuthor.setAttribute("id", "book-author")


        this.books.forEach(book => {
            let bookObj = new Book(book)
            bookObj.createBookCard(bookAuthor)
        })

        const bookForm = document.createElement('form')
        bookForm.innerHTML +=  `
        <div class="text-xl mt-2 p-1 w-2/5 md:w-1/7 mb-2 semibold text-gray-300">Add Your Book Here! </div>
        <input type="text" name="input" id="book-input" class="flex-1 p-2 border-2 border-gray-500 rounded" placeholder="New Book"/>
        <button type="submit" class="flex-none"><i class="fa fa-plus p-3 z--1 bg-yellow-600"></i></button>
        </div>
        `

        bookForm.addEventListener("submit", Book.createBook)

        li.append(deleteBtn, h1, bookAuthor, bookForm)

        authorUL.appendChild(li)

        authorForm.reset()
    }

        static postAuthors(e) {
            e.preventDefault()
            fetch(authorsURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: authorInput.value 
            })
        })
        .then(r => r.json())
        .then(authorData => {
            let newAuthor = new Author(authorData.data)
            newAuthor.createAuthorCard()
        })
        .catch(error => alert(error))
        }

    deleteAuthor() {
        const authorId = this.parentElement.dataset.id

        fetch(`${authorsURL}/${authorId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        this.parentElement.remove()
    }
}

   


      

 


    

   
        
    
    


    

  




// function updateAuthor() {
//     let authorId = this.event.target.authorId.value

//     const author = {
//         name: document.getElementById('name').value
//     }


//     fetch(`http://localhost:3000/${authorId}`, {
//         method: 'PATCH',
//         body: JSON.stringify(author),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//     .then(resp => resp.json() )
//     .then(author => {
        
//         });
// }

// function editAuthor() {
//     let authorId = this.parentElement.getAttribute('data-author-id')

//         fetch(`http://localhost:3000/authors/${authorId}`)
//         .then(resp => resp.json())
//         .then(data => {
//             Author.editAuthorForm()
//             let authorForm = document.getElementById('author-form')
//             authorForm.querySelector('#name').value = data.name 
//         })
// }






     // static createAuthor() {
    //     event.preventDefault()
    //     const author = {
    //         name: document.getElementById('authorName').value
    //     }
    //     const options = {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json"
    //         },
    //         body: JSON.stringify({author: {name: name}})
    //       }
      
    //       document.getElementById('authorName').value = ""
      
    //       fetch("http://localhost:3000/authors", options)
    //       .then(r => r.json())
    //       .then(authorObj => {
    //         if (authorObj.data) {
    //           let newAuthor = new Author(authorObj.data)
    //           newAuthor.renderAuthor()
    //         } else {
    //           throw new Error(authorObj.message)
    //         }
      
    //       }).catch((err) => alert(err))
    //     }

    // static sortAuthor() {
    //     const sortedAuthor = this.allAuthors.sort((a,b) => a.name.localeCompare(b.name))
    //    authorUL.innerHTML = ""
    //    sortedAuthor.forEach(author => author.createAuthorCard())
    // }