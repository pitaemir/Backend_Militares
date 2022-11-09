/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {name: 'Joaquin', sexo: 1},
    {name: 'Anita', sexo: 0}
  ]);
};
