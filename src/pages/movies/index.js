import { useContext, useEffect, useState } from "react";

import { Container } from "../../components/Defaults";
import { GlobalContext } from "../../Contex";
import { getMovies } from "../../services/api";
import Bottom from "./components/Bottom";
import { MoviesWrapper } from "./styles";

export default function Movies() {
  const { setMovies, movies, movieFilter } = useContext(GlobalContext);
  const [moviesToShow, setMoviesToShow] = useState([]);

  useEffect(() => {
    setMoviesToShow(() => {
      return movieFilter === 'watched' 
        ? movies.filter(movie => movie.watched)
        : movieFilter === 'unwatched'
          ? movies.filter(movie => !movie.watched)
          : movies
    })
  }, [movieFilter]);

  useEffect(() => {
    getMovies().then(movies => { setMovies(movies) })
  }, []);

  return (
    <Container>
      <h1>Filmes</h1>
      <MoviesWrapper>
        {moviesToShow.map(movie => (
          <div key={movie.name} className="animationUp movie">
            <img src={movie.posterURL} alt="poster"/>
            <div>
              <span>{movie.name}</span>
              <span className="rating">{movie.rating}</span>
            </div>
          </div>
        ))}
      </MoviesWrapper>

      <Bottom movies={movies} setMovies={setMovies}/>
    </Container>
  )
}