

   

class Author {
    
    static allAuthors = []


    constructor(data) {
        // debugger
        this.name = data.attributes.name
        this.id = data.id
        this.books = data.attributes.books.map(book => new Book (book))
        Author.allAuthors.push(this)
    }


    renderAuthor(){
        let div = document.getElementById('authorContainer')
        let auth = document.createElement("p")
        auth.id = this.id
        auth.innerText = this.name
        auth.addEventListener('click', this.showAuthor.bind(this)) //am I invoking the event listenter function that is defined below?
        div.append(auth)
    }


    // static newAuthorForm() {
    //     let newAuthorFormDiv = document.getElementById('author-form')
    //     newAuthorFormDiv.innerHTML = `
    //     <form onsubmit="createAuthor(); return false;">` + 
    // authorFormFields + 
    // `<input type="submit" value="Add New Author">
    // </form>
    // <br/>`
    // }

    // static editAuthorForm() {
    //     let editAuthorFormDiv = document.getElementById('author-form')
    //         editAuthorFormDiv.innerHTML = `
    //         <form onsubmit="updateAuthor(); return false;">` + 
    //         authorFormFields + 
    //         `<input type="submit" value="Update Info">
    //         </form>
    //         <br/>`
    //     }

    showAuthor() {
 
        let container = document.getElementById('container')
        let h3 = document.createElement('h3')
        let ul = document.createElement("ul")
        let form = document.createElement("form")
        let label = document.createElement("label")
        let input = document.createElement('input')
        let btn = document.createElement("input")
        btn.type = "submit"
        btn.innerText = "Submit"
        input.id = "name"
        label.innerText = "Name:"
        form.id = "authorForm"
        ul.id = "authorUl"
        form.append(label)
        form.append(input)
        form.append(btn)
        container.innerHTML = ""
        h3.innerText = this.name
        container.append(h3)
        container.append(ul)
        for (let author of this.authors) {
          ul.innerHTML += author.todoHTML()
        }
        container.append(form)
        form.addEventListener('submit', this.submitAuthor.bind(this))
      }

      static renderAuthors() {
            for (let author of this.allAuthors) {
                author.renderAuthor()

            }
        }

    static fetchAuthors(){
        fetch("http://localhost:3000/authors")
        // debugger
        .then(r => r.json())
        .then(authors => {
            if (authors.data) {
                
                for (let author of authors.data) {
                    let newAuthor = new Author(author)
                }
                this.renderAuthors()
            } else {
                
                throw new Error (authors.data)
            }
    
            // addAuthorsClickListeners()
            // addBooksClickListeners()
        }).catch(error => alert(error))
        
    } 
}

    
//end Author class


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
         
      });
    
}

function appendAuthors(authors){
    const authorsDiv = document.getElementById('AuthorContainer')
    for (let author of authors) {
        const li = document.createElement("li")
        li.innerText = author.name
        authorsDiv.append(li)
        appendBooks(author.books, li)
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

// function deleteAuthor() {
//     let authorId = this.parentElement.getAttribute('data-author-id')
    
//     fetch(`http://localhost:3000/authors/${authorId}`, {
//         method: 'DELETE'
//       })
//       .then(resp => resp.json())
//       .then(json => {
//           let selectedAuthor = document.querySelector("selectedAuthor") 
//           selectedAuthor.remove()
//       })
// }

//EVENT LISTENERS
    // function addAuthorsClickListeners() {
    //     document.querySelectorAll('.author-name').forEach(element => {
    //     element.addEventListener("click", showMoreInfo)
    //     })

    // document.querySelectorAll('.edit-author-button').forEach(element => {
    //     element.addEventListener("click", editAuthor)
    //     })

    // document.querySelectorAll('.delete-author-button').forEach(element => {
    //     element.addEventListener("click", deleteAuthor)
    //     })
    
    // }