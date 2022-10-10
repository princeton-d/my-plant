import React from 'react';
import PlantItem from '../../components/PlantItem/PlantItem';
import classes from './PlantPick.module.css';
import plantInfo from '../../data/plantInfo.json';

// 김동현 2022.10.04 - 기본작업
const PlantPick = ({userInfo}) => {
  let userId = userInfo.uid;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>오늘의 식물 <span>PICK</span></p>
          </div>
          <div className={classes.toadyPlant}>
            <ul>
              {/* 김동현 2022.10.04 - 각각의 식물 정보 mapping */}
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

export default PlantPick;
