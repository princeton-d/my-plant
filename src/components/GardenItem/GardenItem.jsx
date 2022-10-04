// 김동현 2022.10.04
import React from 'react';
import classes from './GardenItem.module.css';

const GardenItem = () => {
  return (
    <>
      <li className={classes.item}>
        <img className={classes.plantImg} src='#' alt='plant' />
        <div className={classes.rightSide}>
          <p className={classes.plantNickName}>식이</p>
          <p className={classes.plantName}>블루스타펀</p>
          <p>가장 최근 물 준 날</p>
          <input type='date' />
          <p>다음 물 줄 날</p>
          <input type='date' />
        </div>
      </li>
    </>
  );
};

export default GardenItem;
