const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

app.get('/getOverview', (req, res) => {
  res.json({ name: 'Amitoj Lehal', bio: 'Aspiring Full-Stack Developer.' });
});

app.get('/getEdu', (req, res) => {
  res.json([
    { school: 'Seneca College', degree: 'Diploma in Programming', year: '2023-2026' },
    { school: 'High School', degree: 'OSSD', year: '2021' }
  ]);
});

app.get('/getExp', (req, res) => {
  res.json([
    { company: 'Freelance', role: 'Web Developer', duration: '2024 – Present' }
  ]);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
