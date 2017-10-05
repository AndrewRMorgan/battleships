import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GameList from './components/game_list';
import PlayScreen from './components/play_screen';
import GameStatus from './components/game_status';
import Key from './components/key';

const urlForGame = (gameId) =>
  `https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle/${gameId}`;

const urlForGames = () =>
  `https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle`;

const urlForNewGame = () =>
  `https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle`;

const urlForPlayerMove = (gameId) =>
  `https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle/${gameId}/fire`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: null,
      selectedGame: null,
      selectedGameId: '',
      selectedGameStatus: '',
    };

    this.fetchGames();
  }

  fetchGame(gameId) {
    fetch(urlForGame(gameId), { method: 'GET', headers: { 'x-api-key':'ZECDvXoP9i4Kg6ZcfrlYy94j26wpfv0I5DSUzqkV' } })
    .then(d => d.json())
    .then(d => {
      this.setState({
        selectedGame: d,
        selectedGameId: gameId,
        selectedGameStatus: d.battle.gameStatus
      });
    });
  }

  fetchGames() {
    fetch(urlForGames(), { method: 'GET', headers: { 'x-api-key':'ZECDvXoP9i4Kg6ZcfrlYy94j26wpfv0I5DSUzqkV' } })
    .then(d => d.json())
    .then(d => {
      this.setState({
        games: d
      });
    });
  }

  fireMissle(gameId, position) {
    if (this.state.selectedGameStatus === "ONGOING") {
      fetch(urlForPlayerMove(gameId, position), { method: 'POST',
        headers: { 'x-api-key':'ZECDvXoP9i4Kg6ZcfrlYy94j26wpfv0I5DSUzqkV', 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({ "coordinate": position }),
        })
      .then(d => d.json())
      .then(d => {
        this.setState({
          selectedGame: d,
          selectGameStatus: d.battle.gameStatus
        });
      });
    };
  }

  createNewGame() {
    fetch(urlForNewGame(), { method: 'POST',
      headers: { 'x-api-key':'ZECDvXoP9i4Kg6ZcfrlYy94j26wpfv0I5DSUzqkV' } })
    .then(d => d.json())
    .then(d => {
      this.setState({
        selectedGame: d,
        selectedGameId: d.battleId,
      });
      this.fetchGames();
    });
  }

  onGameDelete(gameId) {
    fetch(urlForGame(gameId), { method: 'DELETE',
      headers: { 'x-api-key':'ZECDvXoP9i4Kg6ZcfrlYy94j26wpfv0I5DSUzqkV' } })
      .then(d => {
        if (this.state.selectedGameId === gameId) {
            this.setState({
              selectedGame: null,
              selectedGameId: null
          });
        }
        this.fetchGames();
      });
  }

  render() {
    return (
      <div>
        <div className='left-panel'>
          <GameList
            onGameSelect={gameId => this.fetchGame(gameId)}
            games={this.state.games}
            createNewGame={() => this.createNewGame}
            onGameDelete={gameId => this.onGameDelete(gameId)} />
        </div>
        <div className='right-panel'>
          <PlayScreen selectedGameId={this.state.selectedGameId} selectedGame={this.state.selectedGame} playerMove={(gameId, position) => this.fireMissle(gameId, position)} />
          <Key />
          <GameStatus gameStatus={this.state.selectedGame} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
