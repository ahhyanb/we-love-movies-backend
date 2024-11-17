const { PORT = 5000 } = process.env; // Use the PORT environment variable or default to 5000
const app = require("./app");
const knex = require("./db/connection");

// Start the server and bind to the PORT
const listener = () => console.log(`Listening on port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, "0.0.0.0", listener); // Bind to 0.0.0.0 to listen for external requests
  })
  .catch(console.error);
