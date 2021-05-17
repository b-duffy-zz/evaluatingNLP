const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const cors = require('cors');

// designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

// Creating endpoints

let projectData = {};

//GET route

app.get('/all', function (req, res){
    res.send(projectData);
  });

//POST route
const key = process.env.API_KEY;

app.post('/process', async (req, res) => {
    const article = req.body.url;
    const articleResults = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${article}&lang=en`, { method: 'POST' });
    try{
        const data = await articleResults.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error",error)
    }
});