import React from 'react';
import GuessPegs from './GuessPegs'
import GuessScore from './GuessScore'
import ScoreButton from './ScoreButton';

const GuessRow = (props) => (
    <div className='flex-h component gamerow'>
        <div style={{color: props.currentGuess ? 'black' : 'lightgrey'}}>{props.rowIdx + 1}</div>
    <GuessPegs
      colors={props.colors}
      code={props.guess.code}
      currentGuess={props.currentGuess}
    />
    {
      props.currentGuess ?
        <ScoreButton /> :
        <GuessScore score={props.guess.score} />
    }
    </div>
);

export default GuessRow;