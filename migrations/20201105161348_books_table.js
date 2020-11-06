
exports.up = async function(knex) {
    await knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('title');
        table.string('author');
        table.timestamp('createdAt').default(knex.fn.now());
        table.timestamp('updatedAt');
        table.timestamp('deletedAt');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('books');
};
