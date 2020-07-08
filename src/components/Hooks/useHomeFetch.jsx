import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setstate] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(false);
    try {
      const result = await (await fetch(endpoint)).json();

      setstate((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return [{ state, loading, error }, fetchMovies];
};
