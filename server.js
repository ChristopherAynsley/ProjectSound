
/*
 * project sound Server
 *
 * authors: up numbers here
 */


'use strict';

const mysql = require('mysql');
const express = require('express');

const config = require('./config.js');

const app = express();
const con = mysql.createConnection(config.mysql);

con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected succesfully")
});

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static("public"));
app.listen(config.port, () => console.log(`Server started, listening on port ` + config.port));
