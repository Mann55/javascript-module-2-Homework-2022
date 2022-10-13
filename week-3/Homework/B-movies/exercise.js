/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

/**************  Task 1 ******************/

// create showMovies function

function showMovies() {
  movies.forEach((movie) => {
    setTimeout(() => {
      const pElement = document.createElement("p");
      pElement.innerHTML = movie.title + " : " + movie.director;
      const allMovies = document.querySelector("#all-movies");
      allMovies.appendChild(pElement);
      const moviesNumber = document.querySelector("#movies-number");
      moviesNumber.innerHTML = movies.length;
      console.log(movie.title);
      // empty field
    }, 1000);
  });
}
showMovies();

/**************  Task 2  and Task 3******************/

// create a new movie object for your favorite movie
let myFavMovie = {
  title: "3 Idiots",
  director: "Rajkumar Hirani",
  type: "Motivational",
  haveWatched: true,
};

/* function addMovie */
function addNewMovie(movie) {
  setTimeout(() => {
    const paragraphE = document.createElement("p");
    paragraphE.innerHTML = movie.title + " : " + movie.director;
    const toalMovies = document.querySelector("#all-movies");
    toalMovies.appendChild(paragraphE);
    movies.push(movie.myFavMovie);
    const moviesNumber = document.querySelector("#movies-number");
    moviesNumber.innerHTML = movies.length;
  }, 2000);
}

addNewMovie(myFavMovie);

/*
Task 4
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3
*/

/********************** Task 4 **********************/
const form = document.querySelector("#form");
form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("workinn..");
  addMovie();
});

const addMovie = () => {
  const movieName = document.querySelector("#title").value.trim();
  const movieDirector = document.querySelector("#director").value.trim();
  const movieType = document.querySelector("#type").value.trim();
  const movieWatched = document.querySelector("#watched").value.trim();

  const alMovies = document.querySelector("#all-movies");
  const pEle = document.createElement("p");
  alMovies.appendChild(pEle);

  pEle.innerHTML =
    movieName + "  " + movieDirector + " " + movieType + " " + movieWatched;

  const countTotalMovies = document.querySelector("#movies-number");
  //  countTotalMovies.innerHTML = movies.length++; or
  countTotalMovies.innerHTML++;
};
