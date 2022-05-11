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
  let meanScoreFilms = directors.reduce((a, b) => a.score + b.score);
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
  let orderedFilmsYearAZ = [...array]; // Create new array
  orderedFilmsYearAZ.sort((a,b) => {
    if(a.year > b.year){ //Order by year ascending
      return 1; 
    } else if(b.year > a.year){
      return -1;
    }
    else{ 
      if(a.title > b.title){
        return 1;
      
    }else if(b.title > a.title){
      return -1;
    }
    return 0;
}})
  return orderedFilmsYearAZ;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let scoreMovies = array.filter(movies => movies.score !== ''); 
  let genreMovies = scoreMovies.filter(movies => movies.genre.includes(genre));
  let scores = genreMovies.map(movies => movies.score);
  let genreAverageScore = scores.reduce((a,b) => a + b, 0);
  let averageCategory = parseFloat((genreAverageScore / genreMovies.length).toFixed(2));
  return averageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  let moviesForYear = array.filter(movies => movies.year === year);
  let orderedMoviesScore = [...moviesForYear].sort((a,b) => (a.score < b.score) ? 1 : -1);

  console.log(moviesForYear);
  return orderedMoviesScore;
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
