
module.exports = (movies) => 
	`
		<html>
			<head>
				<link rel="stylesheet" href="/style.css"/>
			</head>
			<body>
				<h1>Movie Channel</h1>
				<form method="POST" action="/typeahead">
					<input type="search" placeholder="Search Movie" size="30" name="title"/>
				</form>
				<div class="wrap">
					${movies.map(movie => 
						`
						<div class="container">
							<a href="/movies/${movie.id}"><img src='${movie.Poster}'/></a>
							<div class="content">
								<a href="/movies/${movie.id}"><p>${movie.id}. <span class="title">${movie.Title}</span></p></a>
								<ul>
									<li>★: ${movie.Rating}</li>
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
