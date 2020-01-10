import React from 'react';

// import styles from '../compcss/GuessPeg.module.css'

const GuessPeg = (props) => (
    <div 
    className='component guesspeg peg'
    style={{
        backgroundColor: props.color,
        border: props.color ? `1px solid ${props.color}`: '1px dashed grey',
        cursor: props.currentGuess && 'pointer'
      }}
    >
        {props.color}

    </div>
);

export default GuessPeg;