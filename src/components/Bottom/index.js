import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/global';
import { searchMovie } from '../../api/movies';
import { BottomWrapper, Item, SearchResultWrapper, SelectedItem } from './styled';
import { ratingNotes } from '../../utils';
import { handleNewMovie, movieFind } from '../../utils/moviesUtils';
import { searchGame } from '../../api/games';
import { gameFind, handleNewGame } from '../../utils/gamesUtils';

export default function Bottom() {
  const { setMovies, movies, dataType, games, setGames } = useContext(GlobalContext);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selected, setSelected] = useState({});
  const [rating, setRating] = useState(ratingNotes[0]);
  const type = 
  dataType === 'movies' ? 'Filme' 
  : dataType === 'games' && 'Jogo';

  function handleDone() {
    setSelected(item => ({...item, done: !item.done}));
  }

  function handleAdd() {
    if(dataType === 'movies') {
      const haveMovie = movieFind(movies, selected);
      handleNewMovie(haveMovie, selected, setMovies);
    } else if(dataType === 'games') {
      const haveGame = gameFind(games, selected);
      handleNewGame(haveGame, selected, setGames);
    }
    setSearchResult([]);
    setSearch('');
  }

  function handleSubmit() {
    if(search) {
      if(dataType === 'movies') searchMovie(search).then(result => {
        setSearchResult(result);
      })
  
      if(dataType === 'games') searchGame(search).then(result => {
        setSearchResult(result);
      });
      setSelected({});
      setSearch('');
    }
  }

  useEffect(() => {
    setSearchResult([]);
  }, [search]);

  useEffect(() => {
    selected.done 
      ? setSelected(movie => ({...movie, rating}))
      : setSelected(movie => {
        delete movie.rating;
        return movie;  
      })
  }, [rating, selected.done]);

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
            {searchResult.map((item) =>
              <React.Fragment key={item.id}>
                <Item
                  onMouseEnter={() => setSelected(item)} 
                  onClick={() => setSelected(item.id === selected.id ? {} : item)}
                  selected={selected.id === item.id}
                >
                  <img src={item.poster} alt='Sem Poster' />
                </Item>
                {selected.id === item.id &&
                  <SelectedItem className='animationShow'>
                    <h2>
                      {dataType === 'movies' && item.title}
                      {dataType === 'games' && item.name}
                    </h2>
                    <div className={`${item.platforms && 'platforms'} providers`}>
                      {item.providers && item.providers.map(provider => 
                        <img src={provider.logo} alt={provider.name}/>
                      )}
                      {item.platforms && item.platforms.map(platform => 
                        <img src={platform.platform_logo} alt={platform.name}/>
                      )}
                    </div>
                    <label>
                      <input type="checkbox" checked={item.checked} onChange={handleDone} />
                      {dataType === 'movies' ? 'Assistido' 
                      : dataType === 'games' && 'Zerado'}
                    </label>
                    {selected.done &&
                      <select className='animationUp' value={rating} onChange={e => setRating(e.target.value)}>
                        {ratingNotes.map(value => 
                          <option value={value} key={value}>{value}</option>  
                        )}
                      </select>
                    }
                    <button onClick={handleAdd}>Adicionar</button>
                  </SelectedItem>
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
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
    </BottomWrapper>
  )
}