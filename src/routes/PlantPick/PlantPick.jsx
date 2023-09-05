import React from 'react';
import PlantItem from '../../components/PlantItem/PlantItem';
import classes from './PlantPick.module.css';
import plantInfo from '../../data/plantInfo.json';

const PlantPick = ({ userInfo }) => {
  let userId = userInfo.uid;
  const randomPlant = (array) => {
    array.sort(() => Math.random() - 0.5);

    return array;
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>
              오늘의 식물 <span>PICK</span>
            </p>
          </div>
          <div className={classes.toadyPlant}>
            <ul>
              {randomPlant(plantInfo.plant).map((item) => {
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
