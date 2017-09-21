import React from 'react';

const GameStatus = ({gameStatus}) => {
  if (!gameStatus) {
    return <div></div>;
  }

  if (gameStatus.battle.gameStatus === "ONGOING"){
    return <div className='game-status'>Game Status: Ongoing</div>
  } else if (gameStatus.battle.gameStatus === "PLAYER_WON") {
    return <div className='game-status'>Game Status: Player Won</div>
  } else if (gameStatus.battle.gameStatus === "ENEMY_WON") {
    return <div className='game-status'>Game Status: Enemy Won</div>
  }
}

export default GameStatus;
