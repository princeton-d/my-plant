import React from 'react';
import classes from './PlantInfoModal.module.css';

const PlantInfoModal = (props) => {
  console.log(props.plant);
  const onClick = (e) => {
    if (e.target.id === 'modalClose') {
      props.setOpenModal(!props.openModal);
    }
  };
  return (
    <>
      <div id='modalClose' className={classes.container} onClick={onClick}>
        <div className={classes.contents}>
          <div className={classes.imgArea}>
            <img
              className={classes.mainImg}
              src={props.plant.picture[0]}
              key={Math.random()}
              alt='img'
            />
            <div className={classes.subImgArea}>
              {props.plant.picture.map((item) => {
                return (
                  <img
                    className={classes.subImg}
                    src={item}
                    key={Math.random()}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes.infoArea}>
            <p>{props.plant.name}</p>
            <p>난이도: {props.plant.Difficulty[1]}</p>
            <p>{props.plant.Description}</p>
            <div className={classes.detailInfo}>
              <div>
                <p>{props.plant.amountOfSunshine[0]}</p>
                <p>{props.plant.amountOfSunshine[1]}</p>
              </div>
              <div>
                <p>{props.plant.irrigationWater[0]}</p>
                <p>{props.plant.irrigationWater[1]}</p>
              </div>
              <div>
                <p>잘 자라는 온도</p>
                <p>
                  {props.plant.Temperature[0]}~
                  {props.plant.Temperature[props.plant.Temperature.length - 1]}
                  ℃의 온도에서 잘 자라요.
                </p>
              </div>
            </div>
            <button>정원에 담기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantInfoModal;
