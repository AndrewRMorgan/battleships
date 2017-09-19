import React from 'react';
import Column from './column';

const Row = ({arr, rowIndex, selectedGame, selectedGameId, playerMove}) => {

  const column = arr.map((num, columnIndex) => {
    return (
      <Column key={columnIndex} rowIndex={rowIndex} columnIndex={columnIndex} num={num} selectedGame={selectedGame} selectedGameId={selectedGameId} playerMove={playerMove} />
    );
  });

  return (
    <tr>
      {column}
    </tr>
  );
}

export default Row;
