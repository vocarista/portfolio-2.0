const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const { getSkills, getRoles, getProjects, getEducation, getCerts, getAchievements, getAbout } = require('./notion')

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:4173', 'https://vocarista.com', 'http://vocarista.com'],
    method: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
    res.send('Server runnning at path: /');
});

app.get('/main/skills', async (req, res) => {
    const response = await getSkills();
    res.json(response);
})

app.get('/main/roles', async (req, res) => {
    const response = await getRoles();
    res.json(response);
})

app.get('/main/projects', async (req, res) => {
    const response = await getProjects();
    res.json(response);
})

app.get('/main/education', async (req, res) => {
    const response = await getEducation();
    res.json(response);
})

app.get('/main/certs', async (req, res) => {
    const response = await getCerts();
    res.json(response);
})

app.get('/main/achievements', async (req, res) => {
    const response = await getAchievements();
    res.json(response);
})

app.get('/main/about', async (req, res) => {
    const response = await getAbout();
    res.json(response);
})

app.get('/main/download', async (req, res) => {
    res.download('./public/resume.pdf', 'Kumar_Piyush_resume.pdf')
})

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});