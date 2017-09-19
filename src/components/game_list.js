import React from 'react';
import GameListItem from './game_list_item';

const GameList = ({onGameSelect, games, createNewGame, onGameDelete}) => {
  if (!games) {
    return <div>Loading Game List...</div>;
  }

  const gameItems = games.battles.map((game) => {
    return (
      <GameListItem
        onGameSelect={onGameSelect}
        key={game.battleId}
        game={game}
        onGameDelete={onGameDelete} />
    );
  });

  return (
    <ul className='game-list'>
      {gameItems}
      <button className='game-list-item new-game-button' onClick={() => createNewGame()}>Create New Game</button>
    </ul>
  );
};

export default GameList;
