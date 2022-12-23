import { createContext, useEffect, useState } from "react";
import { getGenres } from "../services/api";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [dataType, setDataType] = useState('movies');
  const [dataToShow, setDataToShow] = useState([]);
  const [dataFilter, setDataFilter] = useState('unwatched');
  const [search, setSearch] = useState('');

  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieGenre, setMovieGenre] = useState('');

  useEffect(() => {
    getGenres().then(result => {
      setMovieGenres(result);
      setMovieGenre('Todos');
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      movies, setMovies,
      dataToShow, setDataToShow,
      dataFilter, setDataFilter,
      search, setSearch,
      movieGenres, setMovieGenres,
      movieGenre, setMovieGenre, 
      dataType, setDataType
    }}>
      {children}
    </GlobalContext.Provider>
  )
}