import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getMovies(watched) {
  const response = await axios.get('/movies');
  return response.data;
}

export async function searchMovie(movie) {
  const response = await axios.get('/movies/search', {
    params: {
      searchQuery: movie
    }
  });
  return response.data;
}

export async function newMovie(movie) {
  const response = await axios.post('/movies', movie);
  return response.data;
}

export async function ratingMovie(movieId, rating) {
  const response = await axios.put('/movies', {movieId, rating});
  return response.status === 200;
} 

export async function getGenres() {
  const response = await axios.get('/movies/genres');
  return response.data;
}