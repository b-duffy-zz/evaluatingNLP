const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

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

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('../src/client/views/index.html'))
})

app.post('/process', processLanguage) 

const processLanguage = async (baseURL, key, lang) {

    let baseURL = "https://api.meaningcloud.com/sentiment-2.1";
    let key = process.env.API_KEY;
    let lang = "lang=en";

    let response = await fetch('${baseURL}?${key}&${lang}');
    let langData = await response.json;
    console.log(langData);
    return langData;
}
