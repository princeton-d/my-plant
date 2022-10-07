import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { authService } from '../../../service/fbase';
import Button from '../../UI/Button/Button';
import classes from './SignUpModal.module.css';

// 김동현 2022.10.02 setup
const SignUpModal = ({ openModal, setOpenModal }) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    nickname: '',
    name: '',
  });
  const onClick = (e) => {
    if (e.target.id === 'modalClose') {
      setOpenModal(!openModal);
    }
  };
  const modalClose = () => {
    setOpenModal(!openModal);
  };
  // 김동현 2022.10.07
  const onChange = (e) => {
    const key = e.target.name;
    setInputValue((prev) => ({ ...prev, [key]: e.target.value }));
  };
  // 김동현 2022.10.07 - 회원가입 기능
  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      authService,
      inputValue.email,
      inputValue.password
    ).then(() => {
      updateProfile(authService.currentUser, {
        displayName: inputValue.nickname,
      });
    });
  };
  return (
    <>
      <div id='modalClose' className={classes.container} onClick={onClick}>
        <div className={classes.wrap}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src='/image/logo.png' alt='logo' />
          </div>
          {/* auth */}
          <div className={classes.authArea}>
            <form className={classes.authForm} onSubmit={onSubmit}>
              <input
                name='name'
                type='text'
                required
                placeholder='NAME'
                onChange={onChange}
              />
              <input
                name='nickname'
                type='text'
                required
                placeholder='NICKNAME'
                onChange={onChange}
              />
              <input
                name='email'
                type='email'
                required
                placeholder='EMAIL'
                onChange={onChange}
              />
              <input
                name='password'
                type='password'
                required
                placeholder='PASSWORD'
                onChange={onChange}
              />
              <Button className={classes.signInBtn}>회원가입</Button>
            </form>
          </div>
          <button
            type='button'
            onClick={modalClose}
            className={classes.closeBtn}
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
