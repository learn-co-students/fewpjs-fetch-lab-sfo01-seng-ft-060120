function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books') 
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}
// *returned* response should be converted to JSON

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}
// Then, call the second function,
// `renderBooks()`, passing in the API's returned JSON data as the argument. 

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
