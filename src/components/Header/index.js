import { useContext, useEffect } from "react";

import { HeaderWrapper } from "./styles";
import Filters from '../Filters';
import { GlobalContext } from "../../contexts/global";
import { movieFilter } from "../../utils/moviesUtils";

export default function Header() {
  const { setDataToShow, dataFilter, movies, search, setSearch, dataType } = useContext(GlobalContext);
  const type = 
    dataType === 'movies' ? 'Filme' 
    : dataType === 'games' && 'Jogo';
  
  useEffect(() => {
    const filtered =  
      dataType === 'movies' ? movieFilter(movies, dataFilter, search)
      : [];
      setDataToShow(filtered);
      console.log(filtered);  
  }, [search, dataFilter]);

  return (
    <HeaderWrapper>
      <h1>{type}s</h1>
      <input 
        value={search} onChange={e => setSearch(e.target.value)} 
        placeholder={`Buscar ${type}`}  
      />
      <Filters />
    </HeaderWrapper>
  )
}