// 2022.10.04 - 기본 구조 작업

import React from 'react';
import classes from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoArea}>
        <img className={classes.logo} src='#' alt='logo' />
      </div>
      <div className={classes.authArea}>
        <form className={classes.authForm}>
          <input type='email' placeholder='EMAIL' />
          <input type='password' placeholder='PASSWORD' />
          <button>로그인</button>
        </form>
      </div>
      <div className={classes.signUpArea}>
        <span>회원가입</span>
      </div>
      <div className={classes.externalLoginArea}>
        <button>
          <img src='#' alt='icon ' />
          구글로 로그인
        </button>
        <button>
          <img src='#' alt='icon ' />
          게스트 로그인
        </button>
      </div>
    </div>
  );
};

export default AuthNavigation;
