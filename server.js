const fs = require('fs')
const express = require('express')
const morgan = require('morgan')
const http = require('http')
const movieList = require("./views/movieList")
const movieDetails = require("./views/movieDetails")
const bodyParser = require('body-parser')
const data = require('./data')
const {reset}=require('nodemon')
const res=require('express/lib/response')
const {resetWatchers}=require('nodemon/lib/monitor/watch')
const app = express()



app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
	const movies = data.list()
	res.send(movieList(movies))
})

app.get('/movies/:id', (req, res) => {
	const id = req.params.id
	const movie = data.find(id)
	res.send(movieDetails(movie))
})

app.post('/:title', (req, res) => {
	console.log('body', req.body.title);    
	const movies = data.list()
	const content = req.body.title
	res.send(`
		<html>
			<head>
				<link rel="stylesheet" href="/style.css"/>
			</head>
			<body>
				<h1>Successfully found the movie: ${content}</h1>
				${movies.map(movie => movie.Title === content ? `
						<h1>Movie title: ${movie.Title}</h1>
						<img src="${movie.Poster}"/>
					` : '').join('')}
				<a href="/"><p>Search More</p></a>
			</body>
		</html>
	`)
})

app.use((err, data) => {
	res.status = 404
	res.send(`
		<html>
			<head>
				<link rel="stylesheet" href="/style.css"/>
			</head>
			<body>
				<h1>Sorry, this page cannot be found!</h1>
			</body>
		</html>
	`)
})



const port = process.env.Port || 3000

const server = http.createServer(app)

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})