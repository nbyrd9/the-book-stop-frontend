class BookAppAdapter {
    constructor(value) {
		this.booksUrl = "http://localhost:3000/books"
	}

    getBooks() {
		return fetch(this.booksUrl).then(r => r.json())
	}

    createBook(jsObj) {
		const book = {
			author_id:  jsObj.author_id,
			name: jsObj.name,
            genre: jsObj.genre,
            published: jsObj.published
		}
		return fetch(this.booksUrl, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(book)
			})
		.then(r => {
			return r.json()
		})
    }


}




 // static url = 'http://localhost:3000'

    // function fetchAuthors(){
    //     fetch(`${this.url}/authors`)
    //     .then(r => r.json())
    //     .then(data => {
    //         data.forEach(author => {
    //             new Author(author.name)
    //         })
    //     })
    //     .then(Author.renderAuthors.bind(Author))
    //     .catch(console.error)
    // }

    // function appendAuthors(authors){
    //     const authorsDiv = document.getElementById('AuthorContainer')
    //     for (let list of authors) {
    //         const li = document.createElement("li")
    //         li.innerText = list.name
    //         authorsDiv.append(li)
    //     }
    // }