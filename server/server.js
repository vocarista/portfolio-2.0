const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:5173, http://localhost:4173', 'https://vocarista.com', 'http://vocarista.com'],
    method: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
    res.send('Server runnning at path: /')
});

app.listen(port, () => {
    console.log(`Serve running at: http://localhost:${port}`);
});