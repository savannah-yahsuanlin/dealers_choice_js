
module.exports = (movies) => 
	`
		<html>
			<head>
				<link rel="stylesheet" href="/style.css"/>
			</head>
			<body>
				<h1>Movie Channel</h1>
				<div class="wrap">
					${movies.map(movie => 
						`
						<div class="container">
							<img src='${movie.Poster}'/>
							<div class="content">
								<a href="/movies/${movie.id}"><p>${movie.id}. <span class="title">${movie.Title}</span></p></a>
								<ul>
									<li>Year: ${movie.Year}</li>
									<li>Released: ${movie.Released}</li>
									<li>Rated: ${movie.Rated}</li>
								</ul>
							</div>
						</div>
						`
					).join('')} 
				</div>
			</body>
		</html>
	`
