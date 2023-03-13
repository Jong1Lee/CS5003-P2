const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.none(), (req, res) => {
  const image = req.body.image;
  const id = req.body.id;
  const description = req.body.description;
  const username = req.body.username;


  res.json({
    image,
    id,
    description,
    username
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});