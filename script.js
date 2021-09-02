// Api started 
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText =  searchField.value;
    // clear search data
    searchField.value = '';
    // error 
    

    // load data 
    const url =  `https://openlibrary.org/search.json?q=${searchText}`;
    fetch (url)
    .then(res => res.json())
    .then(data => displaySearch(data.docs))
    
}

const displaySearch = books =>{
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    if (books.length === 0) {
        document.getElementById('error-message').innerText = 'No result found';
    }
    else{
        document.getElementById('error-message').innerText = `Total result ${books.length}`;
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" height="300px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title pb-4">${book.title}</h5>
              <p class="card-text">Author: ${book.author_name}</p>
              <p class="card-text">Publication Date: ${book.publish_date.slice(0,3)}</p>
              <p class="card-text">Publisher: ${book.publisher.slice(0,3)}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">1st published: ${book.first_publish_year}</small>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}
}
