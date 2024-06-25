const express = require('express')
const app = express()
const port = 10000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('about request ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})