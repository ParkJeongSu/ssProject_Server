//const express = require('express');
import express from "express";
import {connect} from "./DbUtils/connect.js";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  connect();
  console.log(`test`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
