const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('public'));

const profileData = require('./database.js');
const PORT = process.env.PORT || 3000;



app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

app.get('/profile', (req, res) => {
  res.status(200).json(profileData);
});

app.get('/projects', (req, res) => {
  const { skill } = req.query;

  if (!skill) {
    return res.status(200).json(profileData.projects);
  }

  const filteredProjects = profileData.projects.filter(project =>
    project.technologies.some(tech => tech.toLowerCase() === skill.toLowerCase())
  );

  res.status(200).json(filteredProjects);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});