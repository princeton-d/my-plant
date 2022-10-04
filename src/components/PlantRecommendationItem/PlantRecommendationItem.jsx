import React from 'react';
import classes from './PlantRecommendationItem.module.css';

const PlantRecommendationItem = ({ item }) => {
  return (
    <>
      <label>
        <input type='checkbox' />
        {item.emoji}
        {item.text}
      </label>
    </>
  );
};

export default PlantRecommendationItem;
