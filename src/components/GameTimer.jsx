import React from 'react';
import styles from '../compcss/GameTimer.module.css';

const GameTimer = (props) => (
  <div className={`${styles.GameTimer} flex-h`}>
    00:00
  </div>
);

export default GameTimer;