import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Navigation.module.css';

// 김동현 2022.10.04 navigation 작업
const Navigation = ({ setPlantRecommendation }) => {
  const handlePlantRecommendationButton = () => {
    setPlantRecommendation(true);
  };
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src='/image/logo.png' alt='logo' />
          </div>
          {/* user info */}
          <div className={classes.userInfoArea}>
            <p>환영합니다.</p>
            <h2>@@@ 님</h2>
          </div>
          {/* search */}
          <div className={classes.searchPlantArea}>
            <form className={classes.searchPlantForm}>
              <input type='search' placeholder='식물 이름'/>
              <input type='submit' value="☌"/>
            </form>
          </div>
          {/* menu */}
          <div className={classes.menuArea}>
            <Button className={classes.yellow}>정원 관리하기</Button>
            <Button className={classes.blue} onClick={handlePlantRecommendationButton}>
              식물 추천받기
            </Button>
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
