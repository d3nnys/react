import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzFhOTRhOGQzNzg4ODJjNDRiNDZjZjRkODY1N2EwZiIsIm5iZiI6MTcxNDIzODM1Ny41Mzc5OTk5LCJzdWIiOiI2NjJkMzM5NTVhNzg4NDAxMjdjMTYzYmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5jjZd0kOkEdIhnc7CcSVWZYB1-dGFZd6wxNhXHkvbzM',
  },
};

export const getMovies = async () => {
  const response = await axios.get('/3/trending/movie/week', options);
  return response.data;
};

export const getMovieBySearch = async (query, page) => {
  const response = await axios.get('/3/search/movie', {
    ...options,
    params: {
      query: query,
      page: page,
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieId = async ({ movieId }) => {
  const response = await axios.get(`/3/movie/${movieId}`, options);
  return response.data;
};

export const getReviewByMovieId = async ({ movieId }) => {
  const response = await axios.get(`/3/movie/${movieId}/reviews`, options);
  return response.data.results;
};

export const getCastMovieById = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}/credits`, options);
  return response.data;
};
