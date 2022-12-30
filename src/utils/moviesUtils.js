import { newMovie } from "../api/movies";

export function movieFilter(movies, dataFilter, search) {
  return movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = (dataFilter === 'all') || (dataFilter === 'todo' && !movie.done) || (dataFilter === 'done' && movie.done);
    return matchesSearch && matchesFilter;
  });
}

export function movieFind(movies, movie) {
  return movies.find(m => m.name === movie.title || m.name === movie.original_title); 
}

export function handleNewMovie(haveMovie, selectedMovie, setMovies) {
  if(!haveMovie) {
    newMovie(selectedMovie).then(newMovie => {
      setMovies(old => [{
        name: newMovie.title,
        rating: newMovie.rating,
        posterURL: newMovie.poster,
        genres: newMovie.genres,
        done: newMovie.done
      }, ...old]);
    });
  } else {
    alert('Filme já existe em sua lista.');
  }
}