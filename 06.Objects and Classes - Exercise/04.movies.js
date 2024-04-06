function movies(arr)
{
  let movies = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].includes('addMovie')){
      let movieName = arr[i].split('addMovie ')[1];
      movies.push({name: movieName});

    } else if(arr[i].includes('directedBy')){
      let [movieName, directorName] = arr[i].split(' directedBy ');

      let movie = movies.find(movie => movie.name == movieName);

      if(movie) {
        movie.director = directorName;
      }

    } else if(arr[i].includes('onDate')){
      let tokens = arr[i].toString().split(' onDate ');
      let movieName = tokens[0];
      let date = tokens[1];

      let movie = movies.find(movie => movie.name == movieName);

      if(movie) {
        movie.date = date;
      }
    }
  }

  let completeMovies = movies.filter(
    (movie) => movie.name && movie.director && movie.date
  );

  for (let i = 0; i < completeMovies.length; i++) {
  let finalOutput = JSON.stringify(completeMovies[i]);
  console.log(finalOutput);
  }
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
  ]
  )