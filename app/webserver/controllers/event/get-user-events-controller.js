"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getUserEvent(req, res, next) {
  const { eventId } = req.params;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT users.name, users.avatar_url 
    FROM users INNER JOIN events 
    ON users.id=events.user_id 
    WHERE events.id=?`;
    const [rows] = await connection.execute(sqlQuery, [eventId]);
    connection.release();

    const users = rows.map(user => {
      return {
        ...user
      };
    });

    return res.status(200).send(users);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getUserEvent;
