'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Create route by GET method 
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// Create a person route by POST method 
app.post('/person', (req, res) => {
    const data = req.body;

    const name = req.query.name;
    const age = req.query.age;
    const gender = req.query.gender;
    const newAge = data.age+5;
    res.status(200).send(`${newAge}`);
});

function start(port) {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

module.exports = {
    app: app,
    start: start,
};
