
# WeLoveMovies Backend

Welcome to the WeLoveMovies backend! This server handles all the API requests for movies, reviews, theaters, and critics.

---

## Getting Started

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/your-username/WeLoveMovies.git
   cd WeLoveMovies
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Your Environment**:
   Create a `.env` file with:
   ```env
   PORT=5000
   DATABASE_URL=your_database_url_here
   ```

4. **Migrate and Seed the Database**:
   ```bash
   npx knex migrate:latest
   npx knex seed:run
   ```

5. **Start the Server**:
   ```bash
   npm start
   ```

---

## API Endpoints

- **Movies**: `/movies`, `/movies/:movieId`
- **Reviews**: `/reviews`, `/reviews/:reviewId`
- **Theaters**: `/theaters`

---

## Running Tests

```bash
npm test
```

---

## Tech Stack

- **Node.js**
- **Express**
- **Knex**
- **PostgreSQL**

---

## Error Handling

Errors return as JSON with a status code and message.

---

That's it! Happy coding!
