import React from 'react';
import GuessPegs from './GuessPegs'
import GuessScore from './GuessScore'

const GuessRow = (props) => (
    <div className='component gamerow'>
        <p id={`GuessRow-${props.num}`}>Guess Row #{props.num}</p>
        <GuessPegs />
        <GuessScore />
    </div>
);

export default GuessRow;