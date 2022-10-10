import React, { useState } from 'react';
import classes from './PlantItem.module.css';
import ModalPortal from '../modal/modalPortal';
import PlantInfoModal from '../modal/PlantInfoModal/PlantInfoModal';
import { dbService as db } from '../../service/fbase';
import { addDoc, collection } from 'firebase/firestore';

// 김동현 2022.10.06 - 클릭하면 식물정보 모달창이 보이도록 작업
// 김수영 2022.10.07 - 모달창에서 정원에 추가 클릭 시 정원으로 추가
const PlantItem = ({plant, userId}) => {
  const [openModal, setOpenModal] = useState(false);

  const onClick = () => {
    setOpenModal(!openModal);
  };
  const onAddToGarden = async () => {
    await addDoc(collection(db, "garden"), {
      id: plant.id,
      name: plant.name,
      nickName: plant.name,
      picture: plant.picture,
      difficulty: plant.Difficulty,
      creatorId: userId
    });
  }
  return (
    <>
      <li className={classes.plantList} onClick={onClick}>
        <div className={classes.plantImgWrap}>
          <img
            className={classes.plantImg}
            src={plant.picture[0]}
            alt='plantImg'
          />
        </div>
        <p className={classes.plantName}>{plant.name[0]}</p>
      </li>
      {openModal ? (
        <ModalPortal>
          <PlantInfoModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            plant={plant}
            onAddToGarden={onAddToGarden}
          />
        </ModalPortal>
      ) : null}
    </>
  );
};

export default PlantItem;
