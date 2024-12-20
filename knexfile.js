const path = require("path");
require("dotenv").config();

const {
  DATABASE_URL = "postgresql://we_love_movies_fal9_user:ebuClfMTbgzKuum685j1omrrw0muphSa@dpg-csr7m8rtq21c7393fdt0-a.oregon-postgres.render.com/we_love_movies_fal9?ssl=true",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Ensure SSL is used and not strict
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Ensure SSL is used and not strict
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
