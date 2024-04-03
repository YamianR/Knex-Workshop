/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE book_genre CASCADE')
  await knex('book_genre').del()
  await knex('book_genre').insert([
    {id: 1, genre: 'Science Fiction'},
    {id: 2, genre: 'Horror'},
    {id: 3, genre: 'Fantasy Fiction'},
    {id: 4, genre: 'Drama'},
    {id: 5, genre: 'Non-Fiction'}
  ]);
};
