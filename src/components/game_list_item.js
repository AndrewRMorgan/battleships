import React from 'react';

const GameListItem = ({game, onGameSelect, onGameDelete}) => {

  let status;

  if (game.gameStatus === "ONGOING") {
    status = "Game Status: Ongoing";
  } else if (game.gameStatus === "PLAYER_WON") {
    status = "Game Status: Player Won";
  } else if (game.gameStatus === "ENEMY_WON") {
    status = "Game Status: Enemy Won";
  }

  return (
    <li className='game-list-item'>
      <div className='game-info'>
        <div>Game Id: {game.battleId}</div>
        <div>{status}</div>
      </div>
      <div className='button-div'>
        <button className='play-game-button' onClick={() => onGameSelect(game.battleId)}>Play</button>
        <button className='delete-game-button' onClick={() => onGameDelete(game.battleId)}>Delete</button>
      </div>
    </li>
  );
};

export default GameListItem;
