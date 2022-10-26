import { useContext, useEffect } from "react";
import { VerticalDivider } from "../../../../components/Defaults";
import { GlobalContext } from "../../../../Contex";
import { getGenres } from "../../../../services/api";
import { FiltersWrapper, IconAll, IconUnwatched, IconWatched } from "./styles";


export default function Filters() {
  const { setMovieFilter, movieFilter, movieGenres, setMovieGenres, setMovieGenre, movieGenre } = useContext(GlobalContext);

  useEffect(() => {
    getGenres().then(result => {
      setMovieGenres(result);
      setMovieGenre('Todos');
    });
  }, []);

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
        <button onClick={() => setMovieFilter('all')}>
          <IconAll size={32} active={movieFilter} />
        </button>
        <VerticalDivider />
        <button onClick={() => setMovieFilter('watched')}>
          <IconWatched size={32} active={movieFilter} />
        </button>
        <VerticalDivider />
        <button onClick={() => setMovieFilter('unwatched')}>
          <IconUnwatched size={32} active={movieFilter}/>
        </button>
      </FiltersWrapper>
    </>
  )
}