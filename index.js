function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    //  console.log(json);
     let cardContainer = document.getElementById("card-container");

     json.forEach((item) => {
         cardContainer.innerHTML +=  `
         <div id="card-body">
         <img src ="${item.url}" alt ="${item.name}" height="300px" />
 
         <div id= "card-info">
         <p>${item.name}</p>
         <p>${item.pulisher}</p>
 
         </div>
         </div>
         `;        
         
     });
 })
}
  
  
//   console.log(json));
  
// }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
