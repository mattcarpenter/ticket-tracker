const express = require('express');
const apiRoutes = require('./routes/api/index');
const app = express();

app.use('/api/v1/', apiRoutes);

app.listen(2000, function () {
  console.log('Example app listening on port 2000!');
});
