import React from 'react';

const Column = ({rowIndex, columnIndex, num, selectedGame, selectedGameId, playerMove}) => {
  if (num === 0) {
      return <td key={[rowIndex, columnIndex]} onClick={() => playerMove(selectedGameId, [rowIndex, columnIndex])} className='unknown'></td>;
    } else if (num === 1) {
      return <td key={[rowIndex, columnIndex]} className='player-ship'></td>;
    } else if (num === 3) {
      return <td key={[rowIndex, columnIndex]} className='player-ship-hit'></td>;
    } else if (num === 4) {
      return <td key={[rowIndex, columnIndex]} className='enemy-ship-hit'></td>;
    } else if (num === 5) {
      return <td key={[rowIndex, columnIndex]} className='player-miss'></td>;
    } else if (num === 6) {
      return <td key={[rowIndex, columnIndex]} className='enemy-miss'></td>;
    } else if (num === 7) {
      return <td key={[rowIndex, columnIndex]} className='player-ship-sunk'></td>;
    } else if (num === 8) {
      return <td key={[rowIndex, columnIndex]} className='enemy-ship-sunk'></td>;
    }
};

export default Column;
