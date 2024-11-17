const { PORT = 5000 } = process.env;
const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

// Ensure knex runs migrations and then starts the server
knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener); // Bind to the PORT environment variable
  })
  .catch(console.error);
