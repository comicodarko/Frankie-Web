import { newGame } from "../api/games";

export function gameFind(games, game) {
  console.log(games, game);
  // return movies.find(m => m.name === movie.title || m.name === movie.original_title); 
}

export function handleNewGame(haveGame, selectedGame, setGames) {
  if(!haveGame) {
    newGame(selectedGame).then(newGame => {
      setGames(old => [{
        name: newGame.name,
        rating: newGame.rating,
        posterURL: newGame.poster,
        genres: newGame.genres,
        done: newGame.done,
        rating: newGame.rating
      }, ...old]);
    });
  } else {
    alert('Jogo já existe em sua lista.');
  }
}