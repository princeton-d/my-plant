import React from 'react';
import GardenItem from '../../components/GardenItem/GardenItem';
import classes from './UserGarden.module.css';

// 김동현 2022.10.04 기본 구조작업
const UserGarden = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>@@@'s GARDEN</p>
          </div>
          <div className={classes.contents}>
            <ul>
              <GardenItem />
              <GardenItem />
              <GardenItem />
              <GardenItem />
              <GardenItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGarden;
