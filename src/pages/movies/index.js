import { useContext, useEffect, useState } from "react";
import { Check2 } from '@styled-icons/bootstrap';

import { Container } from "../../components/Defaults";
import { GlobalContext } from "../../contexts/global";
import { getMovies, ratingMovie } from "../../services/api";
import { ratingNotes } from "../../utils";
import Bottom from "../../components/Bottom";
import { EvaluateButton, Genre, MoviesWrapper, NoMovies, RatingConfirmWrapper } from "./styles";
import Header from "../../components/Header";

export default function Movies() {
  const { setMovies, movies, dataFilter, dataToShow, setDataToShow, search, movieGenre, setMovieGenre } = useContext(GlobalContext);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [rating, setRating] = useState(ratingNotes[0]);

  function handleChangeMovies() {
    setDataToShow(() => {
      const filtered = movies.filter(movie => {
        const genreValidation = movieGenre === 'Todos' 
          ? true 
          : movie.genres.some(genre => genre.name === movieGenre); 
        if(dataFilter === 'all' && genreValidation) {
          return movie.name.toLowerCase().includes(search.toLowerCase()) && genreValidation;
        } else if(dataFilter === 'unwatched') {
          return movie.name.toLowerCase().includes(search.toLowerCase()) && !movie.watched && genreValidation;
        } else if(dataFilter === 'watched') {
          return movie.name.toLowerCase().includes(search.toLowerCase()) && movie.watched && genreValidation;
        }
      });
      return filtered;
    });
  }

  function handleRating() {
    ratingMovie(selectedMovie.id, rating).then(success => {
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
  }, [dataFilter, movies, movieGenre]);

  useEffect(() => {
    getMovies().then(movies => { setMovies(movies.reverse()); });
  }, []);

  return (
    <Container>
      <Header />
      <MoviesWrapper>
        {dataToShow.length > 0 
          ? dataToShow.map((movie, index) => (
            <div key={index} className="animationUp movie">
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
                <div className="genres">
                  {movie.genres.map((genre, index) => 
                    <Genre key={index} color={genre.color} onClick={() => setMovieGenre(genre.name)}>
                      {genre.name}
                    </Genre>
                  )}
                </div>
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