import React, { Fragment, useEffect, useState } from "react";

//components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";

const Home = () => {
  const [state, setstate] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(false);
    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      
      setstate((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  },[]);

  return (
    <Fragment>
      <HeroImage />
      <SearchBar />
      <Grid />
      <Spinner />
      <LoadMoreBtn />
      <MovieThumb />
    </Fragment>
  );
};

export default Home;
