import { useContext, useEffect } from "react";

import { HeaderWrapper } from "./styles";
import Filters from '../Filters';
import { GlobalContext } from "../../contexts/global";
import { movieFilter } from "../../utils/moviesUtils";

export default function Header() {
  const { setDataToShow, dataFilter, movies, search, setSearch, dataType } = useContext(GlobalContext);
  const type = 
    dataType === 'movies' ? {label: 'Filme', done: 'Assistidos', todo: 'Para Assistir'} 
    : dataType === 'games' && {label: 'Jogo', done: 'Zerados', todo: 'Para Zerar'};

  useEffect(() => {
    let filtered = []  
    dataType === 'movies' && movieFilter(movies, dataFilter, search)
    setDataToShow(filtered);
  }, [search, dataFilter]);

  return (
    <HeaderWrapper>
      <h1>{type.label}s {dataFilter !== 'all' && type[dataFilter]}</h1>
      <input 
        value={search} onChange={e => setSearch(e.target.value)} 
        placeholder={`Buscar ${type.label}`}  
      />
      <Filters />
    </HeaderWrapper>
  )
}