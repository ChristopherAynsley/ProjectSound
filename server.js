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
const audiostore = ("./public/media/music/");
const multer = require('multer');

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
app.get('/audiolist', songs);

app.listen(config.port, () => console.log(`Server started, listening on port ` +
  config.port));

//Responds with an array of all images in the folder images
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

//Responds with an array of all audio files in the folder images
function songs(req, res) {
  let audioArray = [];
  fs.readdir(audiostore, (err, files) => {
    files.forEach(file => {
      console.log(file);
      audioArray.push(file);
    });
    console.log(audioArray);
    res.send(audioArray);
  });
}

//multer stuff

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagestore)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg")
  }
})

let upload = multer({ storage: storage })


app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  console.log(req);
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.sendStatus(202)
})
