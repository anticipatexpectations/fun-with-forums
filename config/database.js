const pgp = require("pg-promise")();

const db= pgp ({
  host:"localhost",
  port: 5432, //default port for postgres
  database: "forum_db"
});

module.exports = db;
