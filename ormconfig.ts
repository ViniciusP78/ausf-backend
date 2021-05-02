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
    "{src,dist}/models/*.{ts,js}"
  ],
  "migrations": [
    "{src,dist}/database/migrations/*.{ts,js}"
  ],
  "cli": {
    "migrationsDir": "{src,dist}/database/migrations"
  },
  "synchronize": "true"
}