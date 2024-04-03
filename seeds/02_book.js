/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('book').del()
  await knex('book').insert([
    {id: 1, name: 'Book 1', book_genre_id: 1},
    {id: 2, name: 'Book 2', book_genre_id: 2},
    {id: 3, name: 'Book 3', book_genre_id: 3},
    {id: 4, name: 'Book 4', book_genre_id: 4},
    {id: 5, name: 'Book 5', book_genre_id: 5}
  ]);
};
