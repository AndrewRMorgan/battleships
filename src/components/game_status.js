import React from 'react';

const GameStatus = ({gameStatus}) => {
  if (!gameStatus) {
    return <div></div>;
  }

  if (gameStatus.battle.gameStatus === "ONGOING"){
    return <div>Game Status: Ongoing</div>
  } else if (gameStatus.battle.gameStatus === "PLAYER_WON") {
    return <div>Game Status: Player Won</div>
  } else if (gameStatus.battle.gameStatus === "ENEMY_WON") {
    return <div>Game Status: Enemy Won</div>
  }
}

export default GameStatus;
