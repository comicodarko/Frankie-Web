import { useContext, useEffect, useState } from "react";
import { Check2 } from '@styled-icons/bootstrap';

import { Container } from "../../components/Defaults";
import { GlobalContext } from "../../Contex";
import { getMovies, ratingMovie } from "../../services/api";
import { ratingNotes } from "../../utils";
import Bottom from "./components/Bottom";
import { EvaluateButton, MoviesWrapper, RatingConfirmWrapper } from "./styles";

export default function Movies() {
  const { setMovies, movies, movieFilter } = useContext(GlobalContext);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [rating, setRating] = useState(ratingNotes[0]);

  function handleChangeMovies() {
    setMoviesToShow(() => {
      return movieFilter === 'watched' 
        ? movies.filter(movie => movie.watched)
        : movieFilter === 'unwatched'
          ? movies.filter(movie => !movie.watched)
          : movies
    });
  }

  function handleRating() {
    ratingMovie(selectedMovie.id, rating).then(success => {
      console.log(success)
      if(success) {
        setMovies(oldMovies => {
          let editedMovies = [...oldMovies];
          const movieIndex = oldMovies.findIndex(movie => movie.id === selectedMovie.id);
          console.log(movieIndex);
          editedMovies[movieIndex] = {...selectedMovie, rating, watched: true}; 
          return editedMovies;
        });
      
      } else {
        alert('Falha ao dar nota!');
      } 
    })
  }

  useEffect(() => {
    handleChangeMovies();
  }, [movieFilter, movies]);

  useEffect(() => {
    getMovies().then(movies => { setMovies(movies); });
  }, []);

  return (
    <Container>
      <h1>Filmes</h1>
      <MoviesWrapper>
        {moviesToShow.map(movie => (
          <div key={movie.id} className="animationUp movie">
            <img src={movie.posterURL} alt="poster"/>
            <div>
              <span>{movie.name}</span>
              {movie.rating
                ? <span className="rating">{movie.rating}</span>
                : selectedMovie.name !== movie.name 
                  ? <EvaluateButton className="animationLeft" onClick={() => setSelectedMovie(movie)}>
                      Dar Nota
                    </EvaluateButton>
                  : <RatingConfirmWrapper className="animationRight">
                      <select value={rating} onChange={e => setRating(e.target.value)} autoFocus>
                        {ratingNotes.map(rating =>
                          <option value={rating} key={rating}>{rating}</option>  
                        )}
                      </select>
                      <button className="confirm" onClick={handleRating}>
                        <Check2 size={20}/>
                      </button>
                    </RatingConfirmWrapper>                
              }
            </div>
          </div>
        ))}
      </MoviesWrapper>

      <Bottom movies={movies} setMovies={setMovies}/>
    </Container>
  )
}