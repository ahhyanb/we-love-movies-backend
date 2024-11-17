exports.up = function(knex) {
	return knex.schema.createTable("reviews", (table) => {
	  table.increments("review_id").primary().notNullable(); // Primary key
	  table.text("content"); // Content of the review
	  table.integer("score"); // Numerical score for the movie
	  table.integer("critic_id").unsigned().notNullable(); // Foreign key to critics
	  table
		.foreign("critic_id")
		.references("critic_id")
		.inTable("critics")
		.onDelete("CASCADE");
	  table.integer("movie_id").unsigned().notNullable(); // Foreign key to movies
	  table
		.foreign("movie_id")
		.references("movie_id") // Reference movie_id from the movies table
		.inTable("movies")
		.onDelete("CASCADE");
	  table.timestamps(true, true);
		
		
	});
  };
  
  exports.down = function(knex) {
	return knex.schema.dropTable("reviews");
  };
  