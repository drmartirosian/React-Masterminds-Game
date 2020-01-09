import React from 'react';
import styles from '../compcss/ScoreButton.module.css'

// console.log(styles) //test if css is showing up

const ScoreButton = (props) => (
  <button className={`${styles.button} btn btn-default`}>
    ✔
  </button>
);

export default ScoreButton;