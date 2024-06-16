const express = require('express');

const app = express();

app.use('/views', express.static('views'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.listen(3000);
