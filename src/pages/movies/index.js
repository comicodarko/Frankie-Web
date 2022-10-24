import { useContext, useEffect, useState } from "react";
import { Check2 } from '@styled-icons/bootstrap';

import { Container } from "../../components/Defaults";
import { GlobalContext } from "../../Contex";
import { getMovies, ratingMovie } from "../../services/api";
import { ratingNotes } from "../../utils";
import Bottom from "./components/Bottom";
import { EvaluateButton, MoviesWrapper, NoMovies, RatingConfirmWrapper } from "./styles";
import Header from "./components/Header";

export default function Movies() {
  const { setMovies, movies, movieFilter, moviesToShow, setMoviesToShow, search } = useContext(GlobalContext);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [rating, setRating] = useState(ratingNotes[0]);

  function handleChangeMovies() {
    setMoviesToShow(() => {
      const filtered = movies.filter(movie => {
        if(movieFilter === 'all') {
          return movie.name.toLowerCase().includes(search.toLowerCase());
        } else if(movieFilter === 'unwatched') {
          return movie.name.toLowerCase().includes(search.toLowerCase()) && !movie.watched;
        } else if(movieFilter === 'watched') {
          return movie.name.toLowerCase().includes(search.toLowerCase()) && movie.watched;
        }
      });
      return filtered;
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
    getMovies().then(movies => { setMovies(movies.reverse()); });
  }, []);

  return (
    <Container>
      <Header />
      <MoviesWrapper>
        {moviesToShow.length > 0 
          ? moviesToShow.map(movie => (
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
          ))
        : <NoMovies>Sem Filmes :/</NoMovies>
        }
      </MoviesWrapper>

      <Bottom />
    </Container>
  )
}