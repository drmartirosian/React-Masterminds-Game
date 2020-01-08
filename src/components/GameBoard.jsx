import React from 'react';
import GuessRow from './GuessRow'

const GameBoard = (props) => (
    <div className='component'>
        <p>GameBoard</p>
        <GuessRow num={2}/>
        <GuessRow num={1}/>
    </div>
);

export default GameBoard;