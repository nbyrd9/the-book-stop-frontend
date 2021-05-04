class Author {
    constructor(name) {
        this.authorsUrl = "http://localhost:3000/authors"
        this.BindingAndEventListeners()
        this.name= name;
    }

    BindingAndEventListeners() {
		this.newAuthorFormDiv = document.getElementById('new-author-form-div')
	}

    getPrimaryComments() {
		return fetch(this.authorsUrl).then(r => r.json())
	}

    createAuthor(jsObj){
        const author = {
            name: jsObj.name
        }
        return fetch(this.authorsUrl, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(author)
			})
		.then(response => {
			return response.json()
		})
    }


    renderNewAuthorForm() {
        
}

}