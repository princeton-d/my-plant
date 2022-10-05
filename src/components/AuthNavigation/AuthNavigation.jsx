// 2022.10.04 - 기본 구조 작업

import React from 'react';
import Button from '../UI/Button/Button';
import classes from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoArea}>
        <img className={classes.logo} src='/image/logo.png' alt='logo' />
      </div>
      <div className={classes.authArea}>
        <form className={classes.authForm}>
          <input type='email' placeholder='EMAIL' />
          <input type='password' placeholder='PASSWORD' />
          <Button className={classes.loginBtn}>로그인</Button>
        </form>
      </div>
      <div className={classes.signUpArea}>
        <span>회원가입</span>
      </div>
      <div className={classes.externalLoginArea}>
        <Button className={classes.externalLogin}>
          <img src='/image/google.png' alt='google 로그인' />
          구글로 로그인
        </Button>
        <Button className={classes.externalLogin}>
          게스트 로그인
        </Button>
      </div>
    </div>
  );
};

export default AuthNavigation;
