/* 
The `critics` table represents movie critics who have created reviews for movies. Each critic has the following fields:
- `critic_id`: (Primary Key) A unique ID for the critic.
- `preferred_name`: (String) The critic's preferred first name.
- `surname`: (String) The critic's last name.
- `organization_name`: (String) The name of the organization the critic works for.
*/

exports.up = function(knex) {
    // knex.schema.createTable() defines the table structure
   return knex.schema.createTable("critics", (table) => {
        table.increments("critic_id").primary();
        table.string("preferred_name");
        table.string("surname");
        table.string("organization_name");
        table.timestamps(true, true); // creates timestamps fot created_at and updated_at
   })
};

exports.down = function(knex) {
    return knex.schema.dropTable("critics"); // drop table to remove table and contents from the database used to rollback migration
  
};
