import { useContext, useEffect, useState } from "react";

import { HeaderWrapper } from "./styles";
import Filters from '../Filters';
import { GlobalContext } from "../../../../Contex";

export default function Header() {
  const { setMoviesToShow, movieFilter, movies, search, setSearch } = useContext(GlobalContext);
  
  useEffect(() => {
    const filtered = movies.filter(movie => {
      if(movieFilter === 'all') {
        return movie.name.toLowerCase().includes(search.toLowerCase());
      } else if(movieFilter === 'unwatched') {
        return movie.name.toLowerCase().includes(search.toLowerCase()) && !movie.watched;
      } else if(movieFilter === 'watched') {
        return movie.name.toLowerCase().includes(search.toLowerCase()) && movie.watched;
      }
    });
    setMoviesToShow(filtered);
  }, [search, movieFilter]);

  return (
    <HeaderWrapper>
      <h1>Filmes</h1>
      <input 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Buscar filme"  
      />
      <Filters />
    </HeaderWrapper>
  )
}