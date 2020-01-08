import React from 'react';
import GuessPegs from './GuessPegs'

const GuessRow = (props) => (
    <div className='component'>
        <p id={`GuessRow-${props.num}`}>GuessRow {props.num}</p>
        <GuessPegs />
    </div>
);

export default GuessRow;