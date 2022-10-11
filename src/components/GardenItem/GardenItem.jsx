// 김동현 2022.10.04
import React from "react";
import { useState } from "react";
import classes from "./GardenItem.module.css";
import { dbService as db } from "../../service/fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import Button from "../UI/Button/Button";
import ModalPortal from "../modal/modalPortal";
import PlantInfoModal from "../modal/PlantInfoModal/PlantInfoModal";

const GardenItem = ({ item }) => {
  const { plant } = item;
  const [wateringDate, setWateringDate] = useState(item.wateringDate);
  const [editMode, setEditMode] = useState(false);
  const [wateringMode, setWateringMode] = useState(false);
  const [nickName, setNickName] = useState(item.nickName);
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const onEditNickName = (e) => {
    e.preventDefault();
    updateDoc(doc(db, "garden", item.did), {
      nickName: nickName,
    });
    const ok = window.confirm("수정하시겠습니까?");
    if (ok) {
      toggleEditMode();
    }
  };
  const onCancle = () => {
    setNickName(item.nickName);
    toggleEditMode();
  };

  const onDelete = () => {
    const ok = window.confirm("정원에서 제외하겠습니까?");
    if (ok) {
      deleteDoc(doc(db, "garden", item.did));
    }
  };

  const toggleWateringMode = () => setWateringMode((prev) => !prev);
  const startWateringMode = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`
    updateDoc(doc(db, "garden", item.did), {
      wateringDate: today
    })
    setWateringDate(today);
    toggleWateringMode();
  };
  const onChangeWateringDate = (e) => {
    updateDoc(doc(db, "garden", item.did), {
      wateringDate: e.target.value
    })
    setWateringDate(e.target.value);
  }

  const endWateringMode = () => {
    updateDoc(doc(db, "garden", item.did), {
      wateringDate: null
    });
    setWateringDate(null);
    toggleWateringMode();
    console.log(wateringMode);
  }
  return (
    <>
      <li className={classes.item}>
        <div className={classes.plantImgWrap}>
          <img
            className={classes.plantImg}
            src={plant.picture[0]}
            alt="plant"
          />
        </div>
        <div className={classes.rightSide}>
          {editMode ? (
            <form
              className={classes.editNickNameForm}
              onSubmit={onEditNickName}
            >
              <input type="text" value={nickName} onChange={onChangeNickName} />
              <button type="submit" className={classes.editButton}>
                <i className="fa-solid fa-check"></i>
              </button>
              <button onClick={onCancle} className={classes.cancleButton}>
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
          <button className={classes.plantName} onClick={openModalHandler}>
            <span>{plant.name}</span>
            <span>?</span>
          </button>
          {!wateringDate ? (
            <Button
              className={classes.warteringBtn}
              onClick={startWateringMode}
            >
              <span>물주기</span>
              <i className="fa-solid fa-droplet"></i>
            </Button>
          ) : (
            <>
              <div className={classes.wateringDate}>
                <div>
                  <p>가장 최근 물 준 날</p>
                  <input type="date" defaultValue={wateringDate} onChange={onChangeWateringDate} />
                </div>
                <div>
                  <p>다음 물 줄 날</p>
                  <input type="date" />
                </div>
              </div>
              <Button className={classes.stopBtn} onClick={endWateringMode}>
                그만 돌보기
              </Button>
            </>
          )}
          <button className={classes.deleteBtn} onClick={onDelete}>
            정원에서 제외
          </button>
        </div>
      </li>
      {openModal ? (
        <ModalPortal>
          <PlantInfoModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            plant={plant}
            // onAddToGarden={onAddToGarden}
          />
        </ModalPortal>
      ) : null}
    </>
  );
};

export default GardenItem;
