const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let readObject = require('./lib/readfile');

app.use(
    bodyParser.text({ type: 'text/plain' }),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
)

app.post('/grab', function(req, res) {
    //console.log(req.body);
    readObject.read_file(__dirname, req.body, res);
})

app.listen(port, function(){
    console.log(`server running at ${port}`);
})