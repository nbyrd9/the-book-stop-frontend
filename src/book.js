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


     
}