import Books from './books.js';

// 1. Print book titles with a rating higher than 4.5
const highRatedBooks = Books.filter(book => book.rating > 4.5)
                             .map(book => book.title);
console.log("Books with rating higher than 4.5:", highRatedBooks);

// 2. Iterate over books and print details (title, author, rating, genre)
const printBookDetails = Books.map(({ title, author, rating, genre }) => {
  console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
});

// 3. Print book titles with the genre "fiction"
const fictionBooks = Books.filter(book => book.genre === "fiction")
                          .map(book => book.title);
console.log("Fiction books:", fictionBooks);

// 4. Display an array of book authors
const bookAuthors = Books.map(book => book.author);
console.log("Authors:", bookAuthors);
