import React from 'react';
import classes from './PlantRecommendation.module.css';
import checkbox from '../../data/checkbox.json';
import PlantRecommendRadioBig from '../../../src/components/UI/PlantRecommendRadioBig/PlantRecommendRadioBig';
import PlantRecommendRadioSmall from '../../../src/components/UI/PlantRecommendRadioSmall/PlantRecommendRadioSmall';
import PlantRecommendCheckbox from '../../../src/components/UI/PlantRecommendCheckbox/PlantRecommendCheckbox';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/logo.png';
import Button from '../../../src/components/UI/Button/Button';
import plantInfo from '../../data/plantInfo.json';
import PlantItem from '../../components/PlantItem/PlantItem';

// 김동현 2022.10.02
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
              {/* 김동현 2022.10.04 - 식물 추천 로직 구현 예정 */}
              {plantInfo.plant.map((item) => {
                return <PlantItem plant={item} key={item.id} userId={userId} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantRecommendation;
