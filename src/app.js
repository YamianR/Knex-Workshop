const express = require('express');
const app = express();
const port = 8080;

const knex = require('knex')(require('../knexfile')['development'])


app.get('/', (request, response) => {
    response.send('It\'s working or something');
})

app.listen(port, () => {
    console.log('It works');
})

// initial call to get all books (get)
app.get('/books', (request, response) => {
    knex('book')
        .select('*')
        .then(books => {
            const bookName = books.map(book => book.name)
            response.json(bookName)
        })
        .catch(error => {
            console.error(error);
            response.status(404)
        })
})

//TODO ->Set a get call to access a unique ID<-

// method to create a new book (post)
app.post('/books', (request, response) => {
    const { name, book_genre_id, } = request.body
    knex('book')
        .insert({ name, book_genre_id} )
        .then(() => {
            response.status(201).json({message: 'The book was greated successfully'})
        })
})

// method to update a new book (patch)
app.patch('/books/:id', (request, resposne) => {
    const { id } = request.params;
    const { name, book_genre_id } = request.body;
})
