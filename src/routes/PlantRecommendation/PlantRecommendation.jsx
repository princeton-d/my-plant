import React from 'react';
import classes from './PlantRecommendation.module.css';
import plantInfo from '../../data/plantInfo.json';
import PlantItem from '../../components/PlantItem/PlantItem';

// 김동현 2022.10.02
const PlantRecommendation = (props) => {
  console.log('a', props.resultPlant.length);
  let userId = props.userInfo.uid;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>
              {props.userInfo && props.userInfo.displayName}님을 위한{' '}
              <span>추천식물</span>
            </p>
          </div>
          <div className={classes.Recommendation}>
            <ul>
              {/* 김동현 2022.10.04 - 식물 추천 로직 구현 예정 */}
              {props.resultPlant.length > 0 ? (
                props.resultPlant[0].map((item) => {
                  return (
                    <PlantItem plant={item} key={item.id} userId={userId} />
                  );
                })
              ) : (
                <div></div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantRecommendation;
