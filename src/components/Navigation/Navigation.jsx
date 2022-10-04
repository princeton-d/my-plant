import React from 'react';
import classes from './Navigation.module.css';

// 김동현 2022.10.04 navigation 작업
const Navigation = () => {
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src='#' alt='logo' />
          </div>
          {/* user info */}
          <div className={classes.userInfoArea}>
            <p>환영합니다.</p>
            <p>@@@ 님</p>
          </div>
          {/* search */}
          <div className={classes.searchPlantArea}>
            <form className={classes.searchPlantForm}>
              <input type='text' />
              <input type='submit' />
            </form>
          </div>
          {/* menu */}
          <div className={classes.menuArea}>
            <button>정원 관리하기</button>
            <button>식물 추천받기</button>
          </div>
          {/* logout */}
          <div className={classes.logoutArea}>
            <p>로그아웃</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
