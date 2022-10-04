import React from 'react';
import classes from './Home.module.css';

// 김동현 2022.10.01 - html page 작업
const Home = () => {
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
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
    </>
  );
};

export default Home;
