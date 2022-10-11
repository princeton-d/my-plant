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
  const navigate = useNavigate();

  const onClick = () => {
    props.setPlantRecommendation(false);
    navigate('/my-plant');
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.navigation}>
            <div className={classes.container}>
              {/* logo */}
              <div className={classes.logoArea}>
                <img className={classes.logo} src={logo} alt='logo' />
              </div>
              <div className={classes.topInfo}>
                <h3>나는</h3>
                {checkbox.topCheckbox.map((item) => {
                  return (
                    <PlantRecommendRadioBig
                      item={item}
                      key={item.text}
                      name='aboutMe'
                    />
                  );
                })}
              </div>
              <div className={classes.middleInfo}>
                <h3>우리집은</h3>
                <div className={classes.middleBtn}>
                  {checkbox.middleCheckbox.map((item) => {
                    return (
                      <PlantRecommendRadioSmall
                        item={item}
                        key={item.text}
                        name='aboutHome1'
                      />
                    );
                  })}
                  {checkbox.middleCheckboxTwo.map((item) => {
                    return (
                      <PlantRecommendRadioSmall
                        item={item}
                        key={item.text}
                        name='aboutHome2'
                      />
                    );
                  })}
                </div>
              </div>
              <div className={classes.bottomInfo}>
                <h3>이런걸 원해요</h3>
                {checkbox.bottomCheckbox.map((item) => {
                  return <PlantRecommendCheckbox item={item} key={item.text} />;
                })}
              </div>
              <button className={classes.backBtn} onClick={onClick}>
                <i className='fa-solid fa-angle-left'></i>
              </button>
              <span className={classes.recommendBtn}>추천 식물 보기 ↓</span>
            </div>
          </div>
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
