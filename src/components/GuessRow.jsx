import React from 'react';
import GuessPegs from './GuessPegs'
import GuessScore from './GuessScore'
import ScoreButton from './ScoreButton';

const GuessRow = (props) => (
    <div className='component gamerow'>
        <div>{props.rowIdx+1}</div>
        <GuessPegs colors={props.colors} code={props.guess.code} />
        {props.currentGuess ? <ScoreButton /> : <GuessScore />}
    </div>
);

export default GuessRow;