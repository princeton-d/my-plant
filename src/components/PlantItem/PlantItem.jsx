import React from "react";
import classes from "./PlantItem.module.css";

// 김동현 2022.10.04 - 기본작업(이후 랜덤한 조건으로 식물정보 뿌려주도록 수정 예정)
const PlantItem = (item) => {
  return (
    <>
      <li className={classes.plantList}>
        <div className={classes.plantImgWrap}>
          <img
            className={classes.plantImg}
            src={item.plant.picture[0]}
            alt="plantImg"
          />
        </div>
        <p className={classes.plantName}>{item.plant.name[0]}</p>
      </li>
    </>
  );
};

export default PlantItem;
