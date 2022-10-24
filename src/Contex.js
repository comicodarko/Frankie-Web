import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [movieFilter, setMovieFilter] = useState('unwatched');
  const [selectedPage, setSelectPage] = useState('movies');
  const [search, setSearch] = useState('');

  return (
    <GlobalContext.Provider value={{ 
      movies, setMovies,
      moviesToShow, setMoviesToShow,
      movieFilter, setMovieFilter,
      selectedPage, setSelectPage,
      search, setSearch
    }}>
      {children}
    </GlobalContext.Provider>
  )
}