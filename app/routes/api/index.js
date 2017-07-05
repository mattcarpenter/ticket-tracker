const express = require('express');
const router = express.Router();
const boardManager = require('../../manager/board');
const Busboy = require('busboy');

router.post('/board', function(req, res) {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function (fieldName, file, fileName, encoding, mimeType) {
    var buffers = [];
    file.on('data', function (data) {
      buffers.push(data);
    });
    file.on('end', function () {
      var imageBuffer = Buffer.concat(buffers);
      boardManager.updateFromImage(imageBuffer);
      res.send('done');
    });
  });
  req.pipe(busboy);
});

router.get('/board', function (req, res) {
  res.send('getting board');
});

module.exports = router;
