const { KnexTimeoutError } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('book', table => {
        table.increments();
        table.string('name', 250);
        table.integer('book_genre_id');
        table.foreign('book_genre_id').references(`book_genre.id`)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('book', table => {
        table.dropForeign('book_genre_id');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('book');
    })
};
