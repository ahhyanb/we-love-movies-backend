/* 
The `movies` table represents movies stored in the application database. Each movie has the following fields:
- `movie_id`: (Primary Key) A unique ID for the movie.
- `title`: (String) The title of the movie.
- `runtime_in_minutes`: (Integer) The length of the movie in minutes.
- `rating`: (String) The rating given to the movie.
- `description`: (Text) A shortened description of the movie.
- `image_url`: (String) A URL to the movie's poster.
*/
exports.up = function (knex) {
	return knex.schema.createTable("movies", (table) => {
		table.increments("movie_id").primary().notNullable();
		table.string("title");
		table.integer("runtime_in_minutes");
		table.string("rating");
		table.text("description");
		table.string("image_url");
	});
}

exports.down = function (knex) {
	return knex.schema.dropTable("movies");
}
