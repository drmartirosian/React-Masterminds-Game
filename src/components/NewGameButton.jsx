import React from 'react';
import styles from '../compcss/NewGameButton.module.css';

const NewGameButton = (props) => (
  <button
    className={styles.newbtn}
    onClick={props.handleNewGameClick}
  >
    New Game
  </button>
);

export default NewGameButton;