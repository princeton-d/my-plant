import React from 'react';
import classes from './PlantRecommendation.module.css';
import plantInfo from '../../data/plantInfo.json';
import PlantItem from '../../components/PlantItem/PlantItem';

const PlantRecommendation = (props) => {
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
