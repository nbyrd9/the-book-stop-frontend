class BookAppAdapter {

    static url = 'http://localhost:3000'

function fetchAuthors(){
    fetch(`${this.url}/authors`)
    .then(r => r.json())
    .then(data => {
        data.forEach(author => {
            new Author(author.name)
        })
    })
    .then(Author.renderAuthors.bind(Author))
    .catch(console.error)
}

function appendAuthors(authors){
    const authorsDiv = document.getElementById('AuthorContainer')
    for (let list of authors) {
        const li = document.createElement("li")
        li.innerText = list.name
        authorsDiv.append(li)
    }
}

}


