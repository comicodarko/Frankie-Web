import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/global';
import { newMovie, searchMovie } from '../../services/api';
import { BottomWrapper, Movie, SearchResultWrapper, SelectedMovie } from './styled';
import { ratingNotes } from '../../utils';
import { handleNewMovie, movieFind } from '../../utils/moviesUtils';

export default function Bottom() {
  const { setMovies, movies, dataType } = useContext(GlobalContext);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selected, setSelected] = useState({});
  const [rating, setRating] = useState(ratingNotes[0]);
  const type = 
  dataType === 'movies' ? 'Filme' 
  : dataType === 'games' && 'Jogo';

  function handleWatched() {
    setSelected(movie => ({...movie, watched: !movie.watched}));
  }

  function handleAdd() {
    if(dataType === 'movies') {
      const haveMovie = movieFind(movies, selected);
      handleNewMovie(haveMovie, selected, setMovies);
    } else if(dataType === 'games') {
      alert('Em construção!');
    }
    setSearch('');
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
    selected.watched 
      ? setSelected(movie => ({...movie, rating}))
      : setSelected(movie => {
        delete movie.rating;
        return movie;  
      })
  }, [rating, selected.watched]);

  useEffect(() => {
    document.addEventListener('keydown', event => {
      if(event.key === 'Escape') {
        setSearchResult([]); 
        setSelected({});
        setSearch('');
      }
    });
  }, []);

  return (
    <BottomWrapper>
      {searchResult.length > 0 &&
        <SearchResultWrapper className='animationShow'>
          <div>
            {searchResult.map((movie) =>
              <React.Fragment key={movie.id}>
                <Movie 
                  className='movie'
                  onMouseEnter={() => setSelected(movie)} 
                  onClick={() => setSelected(movie.id === selected.id ? {} : movie)}
                  selected={selected.id === movie.id}
                >
                  <img src={movie.poster} alt='Sem Poster' />
                </Movie>
                {selected.id === movie.id &&
                  <SelectedMovie className='movieSelected animationShow'>
                    <h2>{movie.title}</h2>
                    <div className="providers">
                      {movie.providers.map(provider => <img src={provider.logo} alt={provider.name}/>)}
                    </div>
                    <label>
                      <input type="checkbox" checked={movie.checked} onChange={handleWatched} />
                      Assistido
                    </label>
                    {selected.watched &&
                      <select className='animationUp' value={rating} onChange={e => setRating(e.target.value)}>
                        {ratingNotes.map(value => 
                          <option value={value} key={value}>{value}</option>  
                        )}
                      </select>
                    }
                    <button onClick={handleAdd}>Adicionar</button>
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
        placeholder={`Adicionar ${type}`}
      />
    </BottomWrapper>
  )
}