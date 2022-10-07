import React from 'react';
import GardenItem from '../../components/GardenItem/GardenItem';
import classes from './UserGarden.module.css';
import { dbService } from '../../service/fbase';

// 김동현 2022.10.04 기본  구조작업
const UserGarden = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>
              @@@'s <span>GARDEN</span>
            </p>
          </div>
          <div className={classes.contents}>
            <ul>
              <GardenItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGarden;
