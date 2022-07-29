import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const MoviesPage = () => {
  //icons
  const likeIcon = <FontAwesomeIcon icon={faThumbsUp} />;
  const dislikeIcon = <FontAwesomeIcon icon={faThumbsDown} />;
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  console.log(movies);

  const isDeleted = (id) => {
    console.log(id);
    console.log("film supprimé");
    dispatch({
      type: "DELETE_MOVIE",
      payload: id,
    });
  };

  return (
    <div className="main-movies">
      <div className="container-movies">
        {movies &&
          movies.map((movie, index) => {
            return (
              <div key={index} className="movie-card">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="category">category : {movie.category}</p>
                <div className="container-like">
                  <div className="like">
                    {likeIcon}
                    {movie.likes}
                  </div>
                  <div className="dislike">
                    {dislikeIcon}
                    {movie.dislikes}
                  </div>
                </div>
                <div className="container-buttons">
                  <button
                    className="deleted-button"
                    type="button"
                    onClick={() => {
                      isDeleted(movie.id);
                    }}
                  >
                    {trashIcon}
                    delete card
                  </button>
                  <button className="like-button" type="button">
                    {likeIcon}
                    Like
                  </button>
                  <button className="dislike-button" type="button">
                    {dislikeIcon}
                    Dislike
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MoviesPage;
