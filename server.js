'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Create route using GET method 
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// Create a person route using POST method 
app.post('/person', (req, res) => {

    const name = req.query.name;
    const age = req.query.age;
    const gender = req.query.gender;
    const newAge = parseInt(age) + 5
    res.status(200).send(`${newAge}`);
});

function start(port) {
    app.listen(PORT, () => console.log(`Server is listining on ${PORT}`));
}

module.exports = {
    app: app,
    start: start,
};