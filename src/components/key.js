import React from 'react';

const Key = () => {
  return (
    <div className='key-container'>
      <h3 className='key-header'>Key:</h3>
      <div className='key-pair'>
        <div className='unknown key-icon'></div>
        <div className='key-description'>Unknown</div>
      </div>
      <div className='key-pair'>
        <div className='player-ship key-icon'></div>
        <div className='key-description'>Player Ship</div>
      </div>
      <div className='key-pair'>
        <div className='player-miss key-icon'></div>
        <div className='key-description'>Player Miss</div>
      </div>
      <div className='key-pair'>
        <div className='enemy-miss key-icon'></div>
        <div className='key-description'>Enemy Miss</div>
      </div>
      <div className='key-pair'>
        <div className='player-ship-hit key-icon'></div>
        <div className='key-description'>Player Ship Hit</div>
      </div>
      <div className='key-pair'>
        <div className='enemy-ship-hit key-icon'></div>
        <div className='key-description'>Enemy Ship Hit</div>
      </div>
      <div className='key-pair'>
        <div className='player-ship-sunk key-icon'></div>
        <div className='key-description'>Player Ship Sunk</div>
      </div>
      <div className='key-pair'>
        <div className='enemy-ship-sunk key-icon'></div>
        <div className='key-description'>Enemy Ship Sunk</div>
      </div>
    </div>
  )
}

export default Key;
