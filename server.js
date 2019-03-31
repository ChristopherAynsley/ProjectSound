/*
 * project sound Server
 *
 * authors: up numbers here
 */


'use strict';

const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const imagestore = ("./public/media/groupimages/");

const config = require('./config.js');

const app = express();
const con = mysql.createConnection(config.mysql);
const GoogleAuth = require('simple-google-openid');

/* Requires a GOOGLE_CLIENT_ID
app.use(GoogleAuth(process.env.GOOGLE_CLIENT_ID));
app.use('/api', GoogleAuth.guardMiddleware());
*/

con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected succesfully")
});

//app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static("public"));
app.use(express.static("public/pages"));

app.get('/imagelist', images);

app.listen(config.port, () => console.log(`Server started, listening on port ` +
  config.port));


function images(req, res) {
  let imageArray = [];
  fs.readdir(imagestore, (err, files) => {
    files.forEach(file => {
      console.log(file);
      imageArray.push(file);
    });
    console.log(imageArray);
    res.send(imageArray);
  });

}
