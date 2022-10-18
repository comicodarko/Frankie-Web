import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieFilter, setMovieFilter] = useState('unwatched');

  return (
    <GlobalContext.Provider value={{ 
      movies, setMovies,
      movieFilter, setMovieFilter
    }}>
      {children}
    </GlobalContext.Provider>
  )
}