const express = require('express')
const dotEnv = require('dotenv') 
dotEnv.config()

const app = express()

const port=process.env.PORT || 4500

app.use(express.static(__dirname, ));

app.get('/', (req, res) => {

    let page=fs.readFileSync('index.html')
    res.send(page)
    res.end()

})
app.get('/movie', (req, res) => {

    let page=fs.readFileSync('movie.html')
    res.send(page)
    res.end()

})
app.get('/live watch', (req, res) => {

    let page=fs.readFileSync('live watch.html')
    res.send(page)
    res.end()

})

app.get('/search', (req, res) => {

    let page=fs.readFileSync('search.html')
    res.send(page)
    res.end()

})


app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
  })