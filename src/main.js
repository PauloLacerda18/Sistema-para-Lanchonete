const express = require('express')
const morgan = require('morgan')
const log = require('morgan')
const app = express()
const port = 5050

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.sendFile('static/html/home.html', { root: __dirname }) 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
