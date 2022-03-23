import React, { useState } from 'react';
import logo from './logo.svg';
import './GamePage.less';

const GamePage: React.FC<{}> = () => {
  const [currentGuess, setCurrentGuess] = useState('');

  return (
    <div className='game-page'>
      <div className='page-title'>Synoname</div>
      <div className='game-area'>
        <div className='game-area__clue'>a aa</div>
        <div className='game-area__letters'>a e i o u</div>
        <div className='game-area__letters'>{currentGuess}</div>
        <div className='game-area__input'>
          <input
            type='text'
            onChange={(e) => {
              setCurrentGuess(e.target.value);
            }}
            onKeyDown={(e) => {
              console.log('hello');
            }}
          />
          <button>Enter</button>
        </div>
        <div className='game-area__bottom-msg'>you win or smth</div>
      </div>
    </div>
  );
};

export default GamePage;
