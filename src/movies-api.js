import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const options = {
  method: 'GET',
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

export const getMovieId = async ({ movieId }) => {
  const response = await axios.get(`/3/movie/${movieId}`, options);
  return response.data;
};

// axios
//   .get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//  /3/movie/{movie_id}/reviews
