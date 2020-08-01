import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = () => {
  const [state, setstate] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(false);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();

      setstate((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(POPULAR_BASE_URL);
  }, []);
  return [{ state, loading, error }, fetchMovies];
};
