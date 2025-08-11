const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { sampleSize } = require('lodash');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Multer config
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Routes
app.post('/upload', upload.array('images', 10), (req, res) => {
  res.json({ files: req.files });
});

app.get('/random-images', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.status(500).send('Error reading files');
    const selected = sampleSize(files, 3);
    const imagePaths = selected.map(f => `http://localhost:${PORT}/uploads/${f}`);
    res.json(imagePaths);
  });
});

app.post('/upload-dog', async (req, res) => {
  const imageUrl = req.body.url;
  const fileName = `dog-${Date.now()}.jpg`;
  const filePath = path.join(__dirname, 'uploads', fileName);

  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  fs.writeFile(filePath, Buffer.from(buffer), () => {
    res.json({ message: 'Dog image saved', file: fileName });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
