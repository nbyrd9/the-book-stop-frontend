function fetchAuthors(){
    fetch("http://localhost:3000/authors")
    .then(r => r.json())
    .then(authors => {
        console.log(authors)
    })
}