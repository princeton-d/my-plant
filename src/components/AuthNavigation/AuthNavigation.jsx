// 2022.10.04 - 기본 구조 작업

import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { useState } from 'react';
import { authService } from '../../service/fbase';
import Button from '../UI/Button/Button';
import classes from './AuthNavigation.module.css';
import ModalPortal from '../../components/modal/modalPortal';
import SignUpModal from '../../components/modal/SignUpModal/SignUpModal';
import logo from '../../image/logo.png';
import googleLogo from '../../image/google.png';

const AuthNavigation = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('123123');
  const [error, setError] = useState('');
  // 김동현 2022.10.06 - 모달창 실행
  const handleSignUpButton = () => {
    setOpenModal(!openModal);
  };

  // 김동현 2022.10.05 - 이메일, 비밀번호 state에 저장
  const onChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };
  // 김동현 2022.10.05 - 로그인 기능
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          setError('잘못된 비밀번호입니다.');
          break;
        case 'auth/user-not-found':
          setError('등록되지 않은 계정입니다.');
          break;
        default:
          setError(error.code);
      }
    }
  };
  // 김동현 2022.10.05 - 게스트 로그인 기능
  const handleGuestButton = async () => {
    const user = await signInAnonymously(authService);
  };
  // 김동현 2022.10.05 - 구글 로그인 기능
  const handleGoogleLoginButton = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider);
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <div className={classes.logoArea}>
          <img className={classes.logo} src={logo} alt='logo' />
        </div>
        <div className={classes.authArea}>
          <form className={classes.authForm} onSubmit={onSubmit}>
            <input
              name='email'
              type='email'
              required
              placeholder='EMAIL'
              defaultValue='test@test.com'
              onChange={onChange}
            />
            <input
              name='password'
              type='password'
              required
              placeholder='PASSWORD'
              defaultValue='123123'
              onChange={onChange}
            />
            <Button className={classes.loginBtn}>로그인</Button>
          </form>
          <div className={classes.error}>{error}</div>
        </div>
        <div className={classes.signUpArea}>
          <button onClick={handleSignUpButton}>회원가입</button>
          {openModal ? (
            <ModalPortal>
              <SignUpModal openModal={openModal} setOpenModal={setOpenModal} />
            </ModalPortal>
          ) : null}
        </div>
        <div className={classes.externalLoginArea}>
          <Button
            className={classes.externalLogin}
            onClick={handleGoogleLoginButton}
          >
            <img src={googleLogo} alt='google 로그인' />
            구글로 로그인
          </Button>
          <Button className={classes.externalLogin} onClick={handleGuestButton}>
            게스트 로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthNavigation;
