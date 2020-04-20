const db = require("../database/db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  get
};

function get() {
  return db("accounts").select("username");
}

function find() {
  return db("accounts").select("id", "username");
}

function findBy(filter) {
  return db("accounts").where(filter);
}

async function add(user) {
  const [id] = await db("accounts").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("accounts")
    .where({ id })
    .first();
}