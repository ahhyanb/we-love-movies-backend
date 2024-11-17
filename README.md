# WeLoveMovies Backend

Hey there! Welcome to the WeLoveMovies backend server. This app handles all the API requests for movies, reviews, theaters, and critics, making sure movie lovers have all the info they need. Let’s dive into the details!

---

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Movies](#movies)
  - [Reviews](#reviews)
  - [Theaters](#theaters)
- [Database Setup](#database-setup)
- [Tech Stack](#tech-stack)
- [Running Tests](#running-tests)
- [Handling Errors](#handling-errors)
- [Future Ideas](#future-ideas)

---

## Getting Started

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and [PostgreSQL](https://www.postgresql.org/) installed.
- You’ll also need npm or Yarn (whichever you prefer).

### Installation Steps

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
   Create a `.env` file in the root with these variables:
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your_database_url_here
   ```

4. **Migrate and Seed Your Database**:
   ```bash
   npx knex migrate:latest
   npx knex seed:run
   ```

5. **Fire Up the Server**:
   ```bash
   npm start
   ```

---

## API Endpoints

### Movies

- **GET /movies**: Get a list of all movies.
- **GET /movies/:movieId**: Get details for a specific movie.
- **GET /movies/:movieId/theaters**: See which theaters are showing the movie.
- **GET /movies/:movieId/reviews**: Get reviews for a movie, complete with critic info.

### Reviews

- **GET /reviews**: Fetch all reviews.
- **PUT /reviews/:reviewId**: Update a review and get the new version back, including critic info.
- **DELETE /reviews/:reviewId**: Delete a review by ID.

### Theaters

- **GET /theaters**: Get all theaters and the movies they’re showing.

---

## Database Setup

### Entity Relationship Diagram (ERD)

![WeLoveMovies ERD](WeLoveMovies_ERD.png)

---

## Tech Stack

- **Node.js** for the backend.
- **Express** to handle routing and middleware.
- **Knex** for easy SQL queries.
- **PostgreSQL** for the database.
- **Jest** and **Supertest** for testing.
- **dotenv** to manage environment variables.

---

## Running Tests

To run the test suite, just do this:

```bash
npm test
```

- We’re using **Jest** for our tests, and **Supertest** helps us make sure our API endpoints behave.

---

## Handling Errors

We’ve got some built-in error handling for when things go sideways:
- All errors return as JSON, so clients get the right status code and message.
- Example error response:
  ```json
  {
    "error": "Review cannot be found."
  }
  ```

---

## Future Ideas

- **More Endpoints**: Add filtering, advanced search options, or user ratings.
- **Authentication**: Maybe add user login and roles.
- **Performance Boosts**: Optimize database queries or add caching for frequent requests.

---

## Special Thanks

Big shoutout to the Thinkful curriculum for guiding this project and to everyone who helped along the way. Couldn’t have done it without you!

---
