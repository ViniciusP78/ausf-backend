// import dotenv from "dotenv";
// dotenv.config();
module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_DATABASE,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "entities": [
    "./src/models/*.{ts,js}"
  ],
  "migrations": [
    "./src/database/migrations/*.{ts,js}"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  },
  "synchronize": "true"
}