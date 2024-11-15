exports.up = function(knex) {
	return knex.schema.createTable('movies_theaters', (table) => {
	  table.increments('id').primary();
	  table.integer('movie_id').unsigned().notNullable();
	  table.integer('theater_id').unsigned().notNullable();
	  table.boolean('is_showing').notNullable(); // Make sure this line is present
	  table
		.foreign('movie_id')
		.references('movie_id')
		.inTable('movies')
		.onDelete('CASCADE');
	  table
		.foreign('theater_id')
		.references('theater_id')
		.inTable('theaters')
		.onDelete('CASCADE');
	});
  };
  
  exports.down = function(knex) {
	return knex.schema.dropTable('movies_theaters');
  };
  