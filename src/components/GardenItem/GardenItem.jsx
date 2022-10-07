// 김동현 2022.10.04
import React from "react";
import classes from "./GardenItem.module.css";

const GardenItem = () => {
  return (
    <>
      <li className={classes.item}>
        <div className={classes.plantImgWrap}>
          <img className={classes.plantImg} src="#" alt="plant" />
        </div>
        <div className={classes.rightSide}>
          <div className={classes.nickNameArea}>
            <h3 className={classes.plantNickName}>식이</h3>
            <button><i className="fa-solid fa-pen"></i></button>
          </div>
          <button className={classes.plantName}>
            <span>블루스타펀</span>
            <span>?</span>
          </button>
          <p>가장 최근 물 준 날</p>
          <input type="date" defaultValue="2022-10-05" />
          <p>다음 물 줄 날</p>
          <input type="date" />
        </div>
      </li>
    </>
  );
};

export default GardenItem;
