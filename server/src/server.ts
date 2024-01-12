const express = require('express');
const app = express();
const cors = require('cors');
// const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT || 3000;
import { getSkills, getRoles, getProjects, getEducation, getCerts, getAchievements, getAbout } from './notion';

app.use(express.static('public'));

app.use(cors({
    origin: ['https://vocarista.com', 'https://www.vocarista.com', 'https://vocarista.onrender.com',],
    method: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/skills', async (req: any, res: any) => {
    try {
        const response = await getSkills();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching skills:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/roles', async (req: any, res: any) => {
    try {
        const response = await getRoles();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching roles:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/projects', async (req: any, res: any) => {
    try {
        const response = await getProjects();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching projects:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/education', async (req: any, res: any) => {
    try {
        const response = await getEducation();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching education:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/certs', async (req: any, res: any) => {
    try {
        const response = await getCerts();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching certs:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/achievements', async (req: any, res: any) => {
    try {
        const response = await getAchievements();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching achievements:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/about', async (req: any, res: any) => {
    try {
        const response = await getAbout();
        res.json(response);
    } catch (error: any) {
        console.error('Error fetching about:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/download', async (req: any, res: any) => {
    res.download('./public/resume.pdf', 'Kumar_Piyush_resume.pdf');
});

const pingServer = async () => {
    try {
        await axios.get('https://api.main.vocarista.com');
    } catch (error: any) {
        console.error('Error pinging the server:', error.message);
    }
};

const pingInterval = 1000 * 60 * 14;
setInterval(pingServer, pingInterval);

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});
