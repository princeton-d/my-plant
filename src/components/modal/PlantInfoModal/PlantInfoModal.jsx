import React from 'react';
import classes from './PlantInfoModal.module.css';

const PlantInfoModal = (props) => {
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
            <div className={classes.mainImgArea}>
              <img
                className={classes.mainImg}
                src={props.plant.picture[0]}
                alt='img'
              />
            </div>
            <div className={classes.subImgArea}>
              {props.plant.picture.map((item) => {
                return (
                  <div key={Math.random()}>
                    <img className={classes.subImg} src={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.infoArea}>
            <div className={classes.topArea}>
              <h2>{props.plant.name}</h2>
              <p>
                <span>난이도</span>
                <b>{props.plant.Difficulty[1]}</b>
              </p>
            </div>
            <div className={classes.detailInfo}>
              <p>{props.plant.Description}</p>
              <div className={classes.detailInfos}>
                <div>
                  <img src='/image/sun.png' alt='sun' />
                  <h3>{props.plant.amountOfSunshine[0]}</h3>
                  <span>{props.plant.amountOfSunshine[1]}</span>
                </div>
                <div>
                  <img src='/image/water.png' alt='water' />
                  <h3>{props.plant.irrigationWater[0]}</h3>
                  <span>{props.plant.irrigationWater[1]}</span>
                </div>
                <div>
                  <img src='/image/air.png' alt='water' />
                  <h3>잘 자라는 온도</h3>
                  <span>
                    {props.plant.Temperature[0]}~
                    {
                      props.plant.Temperature[
                        props.plant.Temperature.length - 1
                      ]
                    }
                    ℃의 온도에서 잘 자라요.
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.buttonArea}>
              <button>정원에 담기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantInfoModal;
