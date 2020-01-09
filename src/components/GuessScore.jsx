import React from 'react';
import '../compcss/GuessScore.css'

const GuessScore = ({ score }) => {
    let scores = ('P'.repeat(score.perfect) + 'A'.repeat(score.almost) +
      'I'.repeat(4 - score.perfect - score.almost)).split('');

    const baseStyle = {
      width: 10, //or just '10px'
      height: 10,
      margin: 1,
      border: '2px solid',
      borderRadius: '50%'
    }


    // Add below the baseStyle object
    const pegStyles = {
      'P': {
        borderColor: 'black',
        backgroundColor: 'black'
      },
      'A': {
        borderColor: 'black',
        backgroundColor: 'white'
      },
      'I': {
        borderColor: 'white',
        backgroundColor: 'lightgrey'
      }
    };


    return (
      <div className='GuessScore'>
        {scores.map((score, idx) =>
          <div
          key={idx}
          style={{...baseStyle, ...pegStyles[score]}}
          />
        )}
      </div>
    );
  }

export default GuessScore;