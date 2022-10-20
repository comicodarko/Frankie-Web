import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../../Contex';
import { newMovie, searchMovie } from '../../../../services/api';
import { Movie, SearchResultWrapper, SelectedMovie } from './styled';
import { ratingNotes } from '../../../../utils';

export default function NewMovie() {
  const { setMovies, movies } = useContext(GlobalContext);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [rating, setRating] = useState(ratingNotes[0]);

  function handleWatched() {
    setSelectedMovie(movie => ({...movie, watched: !movie.watched}));
  }

  function handleAddMovie() {
    const found = movies.some((movie) => 
      movie.name === selectedMovie.title || 
      movie.name === selectedMovie.original_title) 

    if(!found) {
      newMovie(selectedMovie).then(newMovie => {
        setSearch('');
        setMovies(old => [{
          name: newMovie.title,
          rating: newMovie.rating,
          posterURL: newMovie.poster
        }, ...old]);
      });
    } else {
      alert('Filme já existe em sua lista.');
    }
  }

  useEffect(() => {
    let timer;
    if(search) {
      timer = setTimeout(() => {
        searchMovie(search).then(result => {
          setSearchResult(result);
        })
      }, 500);  
    } else {
      setSearchResult([]);
    }

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    selectedMovie.watched 
      ? setSelectedMovie(movie => ({...movie, rating}))
      : setSelectedMovie(movie => {
        delete movie.rating;
        return movie;  
      })
  }, [rating, selectedMovie.watched]);

  useEffect(() => {
    document.addEventListener('keydown', event => {
      if(event.key === 'Escape') {
        setSearchResult([]); 
        setSelectedMovie({});
        setSearch('');
      }
    });
  }, []);

  return (
    <>
      {searchResult.length > 0 &&
        <SearchResultWrapper className='animationShow'>
          <div>
            {searchResult.map(movie =>
              <React.Fragment key={movie.id}>
                <Movie 
                  className='movie'
                  onMouseEnter={() => setSelectedMovie(movie)} 
                  onClick={() => setSelectedMovie(movie.id === selectedMovie.id ? {} : movie)}
                  selected={selectedMovie.id === movie.id}
                >
                  <img src={movie.poster} alt='Sem Poster' />
                </Movie>
                {selectedMovie.id === movie.id &&
                  <SelectedMovie className='movieSelected animationShow'>
                    <h2>{movie.title}</h2>
                    <label>
                      <input type="checkbox" checked={movie.checked} onChange={handleWatched} />
                      Assistido
                    </label>
                    {selectedMovie.watched &&
                      <select className='animationUp' value={rating} onChange={e => setRating(e.target.value)}>
                        {ratingNotes.map(value => 
                          <option value={value} key={value}>{value}</option>  
                        )}
                      </select>
                    }
                    <button onClick={handleAddMovie}>Adicionar</button>
                  </SelectedMovie>
                }
              </React.Fragment>
            )}
          </div>
        </SearchResultWrapper>
      }
      <input 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Buscar novo filme"  
      />
    </>
  )
}