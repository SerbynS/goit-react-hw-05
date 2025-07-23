import axios from "axios";

const fetchData = async (endpoint, customParams = {}) => {
  const response = await axios.get(endpoint, {
    params: { language: "en-US", ...customParams },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmY5ZWUxMGVlOTZmYTcxZThjYzkxN2Y5ZmFkNDliMCIsIm5iZiI6MTc1MjIxNzQ5NS43NDIsInN1YiI6IjY4NzBiNzk3MTQ1NjA0OTg0NDlhNjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5c6LIZYDgzxUHdmfsqaEB8R_TiwgiwC4OzUJPk8N52o",
    },
  });
  return response;
};

export const getMovie = () =>
  fetchData("https://api.themoviedb.org/3/trending/movie/day");

export const getMovieDetails = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}`);

export const getMovieCast = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}/credits`);

export const getMovieReview = (movieId) =>
  fetchData(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);

export const getMoviesByQuery = (query) =>
  fetchData("https://api.themoviedb.org/3/search/movie", { query });
