import { movies$ } from "../assets/movies.js";

export const initialState = {
  movies: [],
};

movies$
  .then((data) => {
    initialState.movies = data;
  })
  .catch((error) => {
    console.log("attention an error has been encountered");
  });

console.log(initialState);

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    // case "MOVIE_LIKED":
    // return {
    //   ...state,
    //   movies: state.movies.map((movie) => {
    //     if (movie.id === action.payload) {
    //       return {
    //         ...movies,
    //         likes: ++,
    //       };
    //     }
    //     return movies;
    //   }),
    // };

    default:
      return state;
  }
};

export default moviesReducer;
