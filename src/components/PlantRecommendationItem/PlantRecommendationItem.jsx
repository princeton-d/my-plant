import React from "react";
import classes from "./PlantRecommendationItem.module.css";

const PlantRecommendationItem = ({ item }) => {
  return (
    <div className={classes.recommend}>
      <label htmlFor={item.id}>
        <span className={classes.emoji}>{item.emoji}</span>
        <span className={classes.text}>{item.text}</span>
        <input
          type="radio"
          id={item.id}
          className={classes.checkbox}
          name="recommand"
        />
      </label>
    </div>
  );
};

export default PlantRecommendationItem;
