// Exercise 1: Get the array of all directors.
const movies = require("./data")

function getAllDirectors(array) {
  let directors =  array.map(movies => movies.director); 
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let directors = array.filter(movies => movies.director === director);
  return directors;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directors = array.filter(movies => movies.director === director);
  let meanScoreFilms = directors.reduce((acc, item) => acc.score + item.score); //Mejorar / cambiar.
  let scoreAverage= parseFloat((meanScoreFilms / directors.length).toFixed(2));
  return scoreAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(movies => movies.title);
  let orderedMoviesAZ = titles.sort().slice(0,20);
  return orderedMoviesAZ;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  array.map(movies => {
    let orderedFilmsYear = movies.year.sort((a,b) =>(a - b));
    console.log(orderedFilmsYear);
  });
  
  
  
  return orderedFilmsYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  let moviesForYear = array.filter(movies => movies.year === year);
  let orderedMovies = moviesForYear.sort((a,b) => (a.score > b.score) ? 1 : -1);
  let bestFilmOfYear = orderedMovies
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
