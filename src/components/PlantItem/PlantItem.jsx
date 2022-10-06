import React, { useState } from 'react';
import classes from './PlantItem.module.css';
import ModalPortal from '../modal/modalPortal';
import PlantInfoModal from '../modal/PlantInfoModal/PlantInfoModal';

// 김동현 2022.10.06 - 클릭하면 식물정보 모달창이 보이도록 작업
const PlantItem = (item) => {
  const [openModal, setOpenModal] = useState(false);

  const onClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <li className={classes.plantList} onClick={onClick}>
        <div className={classes.plantImgWrap}>
          <img
            className={classes.plantImg}
            src={item.plant.picture[0]}
            alt='plantImg'
          />
        </div>
        <p className={classes.plantName}>{item.plant.name[0]}</p>
      </li>
      {openModal ? (
        <ModalPortal>
          <PlantInfoModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            plant={item.plant}
          />
        </ModalPortal>
      ) : null}
    </>
  );
};

export default PlantItem;
