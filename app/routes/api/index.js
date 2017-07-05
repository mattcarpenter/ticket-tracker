const express = require('express');
const router = express.Router();
const boardManager = require('../../manager/board');
const Busboy = require('busboy');
const fs = require('fs');

router.post('/board', function(req, res) {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function (fieldName, file, fileName, encoding, mimeType) {
    var buffers = [];
    file.on('data', function (data) {
      buffers.push(data);
    });
    file.on('end', function () {
      var imageBuffer = Buffer.concat(buffers);
      var tags = boardManager.updateFromImage(imageBuffer);
      res.header('Content-Type', 'image/jpeg');
      res.end(tags[0].data, 'binary');
    });
  });
  req.pipe(busboy);
});

router.get('/board', function (req, res) {
  res.send('hello');
});

module.exports = router;
