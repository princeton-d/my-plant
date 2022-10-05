// 김동현 2022.10.04 - 기본 구조작업

import React from "react";
import classes from "./recommendationNavigation.module.css";
import checkbox from "../../data/checkbox.json";
import PlantRecommendationItem from "../PlantRecommendationItem/PlantRecommendationItem";

const recommendationNavigation = () => {
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src="/image/logo.png" alt="logo" />
          </div>
          <div className={classes.topInfo}>
            <h3>나는</h3>
            {checkbox.topCheckbox.map((item) => {
              return <PlantRecommendationItem item={item} key={item.text} />;
            })}
          </div>
          <div className={classes.middleInfo}>
            <h3>우리집은</h3>
            {checkbox.middleCheckbox.map((item) => {
              return <PlantRecommendationItem item={item} key={item.text} />;
            })}
          </div>
          <div className={classes.bottomInfo}>
            <h3>이런걸 원해요</h3>
            {checkbox.bottomCheckbox.map((item) => {
              return <PlantRecommendationItem item={item} key={item.text} />;
            })}
          </div>
          <button className={classes.backBtn}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default recommendationNavigation;
