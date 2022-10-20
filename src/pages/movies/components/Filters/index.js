import { useContext } from "react";
import { VerticalDivider } from "../../../../components/Defaults";
import { GlobalContext } from "../../../../Contex";
import { FiltersWrapper, IconAll, IconUnwatched, IconWatched } from "./styles";


export default function Filters() {
  const { setMovieFilter, movieFilter } = useContext(GlobalContext);

  return (
    <>
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