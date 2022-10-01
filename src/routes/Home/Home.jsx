import React from 'react';
import classes from './Home.module.css';

// 김동현 2022.10.01 - html page 작업
const Home = () => {
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {/* left side auth area */}
          <div className={classes.leftArea}>
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
          {/* right side welcome page */}
          <div className={classes.rightArea}>
            <div className={classes.test}>
              <p>나에게 맞는</p>
              <p>식물을 추천해주는</p>
              <p>MY PLANT에 오신 것을</p>
              <p>환영합니다</p>
            </div>
            <div>
              <p>나와 맞는 식물들을</p>
              <p>찾고 만나보세요!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
