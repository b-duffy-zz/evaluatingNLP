const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const app = express()

/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { RSA_NO_PADDING } = require('constants');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})


// Creating endpoints

const projectData = {};

//GET route

app.get('/all', function (req, res){
    res.send(projectData);
  });

//POST route

let data = [];

app.post('/process', function(req, res){
    data.push(req.body);
    projectData["newEntry"] = data;
});
