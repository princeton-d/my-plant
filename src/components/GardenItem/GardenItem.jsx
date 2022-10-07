// 김동현 2022.10.04
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import classes from "./GardenItem.module.css";

const GardenItem = ({ plant }) => {
  console.log(plant);
  const [editMode, setEditMode] = useState(false);
  const [nickName, setNickName] = useState(plant.name);
  const toggleEditMode = () => {
    setEditMode((prev) => !prev)
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const onEditNickName = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <li className={classes.item}>
        <div className={classes.plantImgWrap}>
          <img className={classes.plantImg} src={plant.picture[0]} alt="plant" />
        </div>
        <div className={classes.rightSide}>
          {editMode ? (
            <form className={classes.editNickNameForm} onSubmit={onEditNickName}>
              <input type="text" value={nickName} onChange={onChangeNickName} />
              <button
                type="submit"
                className={classes.editButton}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button onClick={toggleEditMode} className={classes.cancleButton}>
                x
              </button>
            </form>
          ) : (
            <div className={classes.nickNameArea}>
              <h3 className={classes.plantNickName}>{nickName}</h3>
              <button onClick={toggleEditMode}>
                <i className="fa-solid fa-pen"></i>
              </button>
            </div>
          )}
          <button className={classes.plantName}>
            <span>{plant.name}</span>
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
