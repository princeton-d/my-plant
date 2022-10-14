import React from 'react';
import classes from './PlantRecommendRadioBig.module.css';

const PlantRecommendRadioBig = ({ item, name, handleCheckbox }) => {
  return (
    <div className={classes.recommend}>
      <label htmlFor={item.id}>
        <span className={classes.emoji}>{item.emoji}</span>
        <span className={classes.text}>{item.text}</span>
      </label>
      <input
        type='radio'
        id={item.id}
        className={classes.checkbox}
        name={name}
        onChange={handleCheckbox}
      />
    </div>
  );
};

export default PlantRecommendRadioBig;
