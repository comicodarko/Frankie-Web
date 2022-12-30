import { useContext } from "react";
import { VerticalDivider } from "../../components/Defaults";
import { GlobalContext } from "../../contexts/global";
import { FiltersWrapper, IconAll, IconTodo, IconDone } from "./styles";

export default function Filters() {
  const { setDataFilter, dataFilter, movieGenres, setMovieGenre, movieGenre } = useContext(GlobalContext);

  return (
    <>
      <select onChange={e => setMovieGenre(e.target.value)} value={movieGenre}>
        <option value="Todos">Gênero</option>
        {movieGenres.map(genre => 
          <option key={genre.name} value={genre.name}>
            {genre.name}
          </option>  
        )}
      </select>
      <FiltersWrapper>
        <button onClick={() => setDataFilter('all')}>
          <IconAll size={32} active={dataFilter} />
        </button>
        <VerticalDivider />
        <button onClick={() => setDataFilter('done')}>
          <IconDone size={32} active={dataFilter} />
        </button>
        <VerticalDivider />
        <button onClick={() => setDataFilter('todo')}>
          <IconTodo size={32} active={dataFilter}/>
        </button>
      </FiltersWrapper>
    </>
  )
}