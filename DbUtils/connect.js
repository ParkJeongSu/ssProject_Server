'use strict';
import oracledb from "oracledb";
import dbConfig from "./dbconfig.js";

async function connect() {

  let connection;

  try {
    // Get a non-pooled connection
    connection = await oracledb.getConnection(dbConfig);

    console.log('Connection was successful!');

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

export { connect }


