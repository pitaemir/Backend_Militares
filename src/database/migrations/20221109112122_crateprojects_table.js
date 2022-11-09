/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table){
        table.increments('nmilitares')
        table.text('title')

        table.integer('militar_nmilitares')
        .references('militares.nmilitares')
        .onDelete('SET NULL')

        table.timestamps(true, true)
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('projects')
  
};
