const express = require('express')
const app = express()
const port = 3001
const fs = require('fs');
const path = require('path'); 



app.use(express.static(__dirname + '/public')); 

app.get('/random', (req, res) => {
    const files = fs.readdirSync(__dirname + '/public');
     const filterFiles = files.filter(fileName => path.extName(fileName) === '.jpg')
    res.send('http://localhost:3001/public/' + filterFiles[getRandomInt(0, filterFiles.length)]) 
})

app.listen(port, () => console.log(`Looking for dog at http://localhost:${port}`))



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}