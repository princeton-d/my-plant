import React from 'react';
import classes from './PlantRecommendCheckbox.module.css';

const PlantRecommendCheckbox = ({ item, handleCheckbox }) => {
  return (
    <div className={classes.recommend}>
      <label htmlFor={item.id}>
        <span className={classes.emoji}>{item.emoji}</span>
        <span className={classes.text}>{item.text}</span>
      </label>
      <input
        type='checkbox'
        id={item.id}
        className={classes.checkbox}
        onChange={handleCheckbox}
      />
    </div>
  );
};

export default PlantRecommendCheckbox;
