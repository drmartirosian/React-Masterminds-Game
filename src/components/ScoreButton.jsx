import React from 'react';
import styles from '../compcss/ScoreButton.module.css';

const ScoreButton = (props) => (
  <button
    className={`${styles.button} btn btn-default`}
    disabled={props.disabled}
    onClick={props.handleScoreClick}
  >
    ✔
  </button>
);

export default ScoreButton;