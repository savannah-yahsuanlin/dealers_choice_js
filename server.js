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
	const content = req.body.title
	res.send(`
		<html>
			<head>
				<link rel="stylesheet" href="/style.css"/>
			</head>
			<body>
				<h1>Successfully found the movie: ${content}</h1>
				<a href="/"><p>Search More</p></a>
			</body>
		</html>
	`)
})

app.use((err, data) => {
	if(err){
		res.statusCode = 404
		res.write('<h1>Page Not Found</h1>')
		res.end()
	} else {
		res.send(`${data}`)
	}
})


const port = process.env.Port || 3000

const server = http.createServer(app)

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})