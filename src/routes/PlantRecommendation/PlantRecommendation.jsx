import React from 'react';
import classes from './PlantRecommendation.module.css';
import plantInfo from '../../data/plantInfo.json';
import PlantItem from '../../components/PlantItem/PlantItem';

// 김동현 2022.10.02
const PlantRecommendation = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>@@@님을 위한 <span>추천식물</span></p>
          </div>
          <div className={classes.Recommendation}>
            <ul>
              {/* 김동현 2022.10.04 - 식물 추천 로직 구현 예정 */}
              {plantInfo.plant.map((item) => {
                return <PlantItem plant={item} key={item.id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantRecommendation;
