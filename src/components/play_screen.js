import React from 'react';
import Row from './row';

const PlayScreen = ({selectedGameId, selectedGame, playerMove}) => {
    if (!selectedGame) {
      return (
        <div className='container'>
          <div className='dummy'></div>
          <div className='table-container'>
            <table className='table'>
            </table>
          </div>
      </div>
      );
    }

    const row = selectedGame.battle.battlefield.map((arr, rowIndex) => {
      return (
        <Row key={rowIndex} arr={arr} rowIndex={rowIndex} selectedGame={selectedGame} selectedGameId={selectedGameId} playerMove={playerMove} />
      );
    });

    return (
      <div className='container'>
        <div className='dummy'></div>
        <div className='table-container'>
          <table className='table'>
            <tbody>
              {row}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PlayScreen;
