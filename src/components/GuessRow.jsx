import React from 'react';
import GuessPegs from './GuessPegs';
import GuessScore from './GuessScore';
import ScoreButton from './ScoreButton';
import styles from '../compcss/GuessRow.module.css';

const GuessRow = (props) => (
  <div className={styles.GuessRow}>
    <div
      className={styles.rowNum}
      style={{color: props.currentGuess ? 'black' : 'lightgrey'}}
    >
      {props.rowIdx + 1}
    </div>
    <GuessPegs
      colors={props.colors}
      code={props.guess.code}
      currentGuess={props.currentGuess}
      handlePegClick={props.handlePegClick}
    />
    {
      props.currentGuess && props.guess.score.perfect !== 4 ?
        <ScoreButton
          disabled={props.guess.code.includes(null)}
          handleScoreClick={props.handleScoreClick}
        /> :
        <GuessScore score={props.guess.score} />
    }
  </div>
);

export default GuessRow;