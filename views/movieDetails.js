module.exports = (movie) => 
`
	<html>
		<head>
			<link rel="stylesheet" href="/style.css"/>
		</head>
		<body>
			
			<div class="container">
				<a href="/movies/${movie.id}"><p>${movie.id}. <span class="title">${movie.Title}</span></p></a>
				<img src='${movie.Poster}'/>
				<div class="content">
					<ul>
						<li>Year: ${movie.Year}</li>
						<li>Released: ${movie.Released}</li>
						<li>Rated: ${movie.Rated}</li>
						<li>Genre: ${movie.Genre}</li>
						<li>Director: ${movie.Director}</li>
						<li>Actors: ${movie.Actors}</li>
						<li>Language: ${movie.Language}</li>
						<li>Country: ${movie.Country}</li>
						<li>Awards: ${movie.Awards}</li>
					</ul>
					<div class="switch">
						<a href="/movies/${movie.id-1}"><h4> << Previous</h4></a>
						<a href="/"><h4>See All</h4></a>
						<a href="/movies/${movie.id+1}"><h4>Next >> </h4></a>
					</div>
				</div>
			</div>
			
		</body>
	</html>
	`
