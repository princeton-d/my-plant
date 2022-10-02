import React from 'react';
import classes from './SignUpModal.module.css';

// 김동현 2022.10.02 setup
const SignUpModal = ({ openModal, setOpenModal }) => {
  const onClick = (e) => {
    if (e.target.id === 'modalClose') {
      setOpenModal(!openModal);
    }
  };
  return (
    <>
      <div id='modalClose' onClick={onClick}>
        <div>
          <h3>컨텐츠</h3>
          <button id='modalClose' type='button' onClick={onClick}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
