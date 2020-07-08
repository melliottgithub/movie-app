import React from "react";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img className="clickable" src={image} alt="moviethumb"></img>
      ) : (
        <img src={image} alt='moviethumb'></img>
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
