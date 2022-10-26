import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [movieFilter, setMovieFilter] = useState('unwatched');
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieGenre, setMovieGenre] = useState('');
  const [selectedPage, setSelectPage] = useState('movies');
  const [search, setSearch] = useState('');

  return (
    <GlobalContext.Provider value={{ 
      movies, setMovies,
      moviesToShow, setMoviesToShow,
      movieFilter, setMovieFilter,
      selectedPage, setSelectPage,
      search, setSearch,
      movieGenres, setMovieGenres,
      movieGenre, setMovieGenre, 
    }}>
      {children}
    </GlobalContext.Provider>
  )
}