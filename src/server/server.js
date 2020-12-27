// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const app = express();

// Require Express to run server and routes

// Start up an instance of app
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('./dist'));


// Setup Server
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});

// Get all trips
app.get('/trips', (req, res) => {
    res.status(200).send(tripData)
  })
  

