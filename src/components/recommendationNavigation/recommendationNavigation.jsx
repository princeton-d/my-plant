// 김동현 2022.10.04 - 기본 구조작업

import React from 'react';
import classes from './recommendationNavigation.module.css';
import checkbox from '../../data/checkbox.json';
import PlantRecommendationItem from '../PlantRecommendationItem/PlantRecommendationItem';

const recommendationNavigation = () => {
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src='#' alt='logo' />
          </div>
          <div className={classes.topInfo}>
            <p>나는</p>
            {checkbox.topCheckbox.map((item) => {
              return <PlantRecommendationItem item={item} key={item.text} />;
            })}
          </div>
          <div className={classes.middleInfo}>
            <p>우리집은</p>
            {checkbox.middleCheckbox.map((item) => {
              return <PlantRecommendationItem item={item} key={item.text} />;
            })}
          </div>
          <div className={classes.bottomInfo}>
            <p>이런걸 원해요</p>
            {checkbox.bottomCheckbox.map((item) => {
              return <PlantRecommendationItem item={item} key={item.text} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default recommendationNavigation;
