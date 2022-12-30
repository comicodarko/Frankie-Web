import { createContext, useEffect, useState } from "react";
import { getMovieGenres, getMovies } from "../api/movies";
import { getGames } from "../api/games";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [dataType, setDataType] = useState('movies');
  const [dataToShow, setDataToShow] = useState([]);
  const [dataFilter, setDataFilter] = useState('todo');
  const [search, setSearch] = useState('');

  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieGenre, setMovieGenre] = useState('');

  const [games, setGames] = useState([]);

  useEffect(() => {
    getMovieGenres().then(result => {
      setMovieGenres(result);
      setMovieGenre('Todos');
    });

    getMovies().then(movies => { setMovies(movies.reverse()); });
    getGames().then(games => { setGames(games.reverse()); });
  }, []);

  useEffect(() => {
    dataType === 'movies' && setDataToShow(movies);
    dataType === 'games' && setDataToShow(games);
  }, [dataType])

  return (
    <GlobalContext.Provider value={{ 
      movies, setMovies,
      dataToShow, setDataToShow,
      dataFilter, setDataFilter,
      search, setSearch,
      movieGenres, setMovieGenres,
      movieGenre, setMovieGenre, 
      dataType, setDataType,
      games, setGames
    }}>
      {children}
    </GlobalContext.Provider>
  )
}