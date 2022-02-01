const express = require('express')
const morgan = require('morgan')
const movieList = require("./views/movieList");
const movieDetails = require("./views/movieDetails");
const data = require('./data')
const app = express()



app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
	const movies = data.list()
	res.send(movieList(movies))
})

app.get('/movies/:id', (req, res) => {
	const id = req.params.id
	const movie = data.find(id)
	res.send(movieDetails(movie))
})

const port = process.env.Port || 3000

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})