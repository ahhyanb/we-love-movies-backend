const { PORT = 10000 } = process.env; // Use the PORT environment variable provided by Render, default to 10000
const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on port ${PORT}!`);

// Run database migrations and start the server
knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    // Bind the app to 0.0.0.0 and the PORT
    app.listen(PORT, "0.0.0.0", listener);
  })
  .catch(console.error);
