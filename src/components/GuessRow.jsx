import React from 'react';
import GuessPegs from './GuessPegs'
import GuessScore from './GuessScore'

const GuessRow = (props) => (
    <div className='component gamerow'>
        <div>{props.rowIdx+1}</div>
        <GuessPegs
            colors={props.colors}
            code={props.guess.code}
        />
        <GuessScore />
    </div>
);

export default GuessRow;