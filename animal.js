const express = require('express')
const app = express()
const port = 3001
const fs = require('fs');



app.use('/static', express.static((__dirname, 'public')))

app.get('/random', (req, res) => {
    const files = fs.readdirSync((__dirname, 'public')) 
    res.send({ message: 'http://localhost:3001/public/' + files[0], status: "OK"}) 
})

app.listen(port, () => console.log(`Looking for dog at http://localhost:${port}`))
