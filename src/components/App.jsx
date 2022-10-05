import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { authService } from '../service/fbase';
import classes from './App.module.css';
import AppRouter from './router';

const App = () => {
  // 김동현 2022.10.04 - true: 네비게이션, false: 인증화면 출력(임시 테스트용)
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [plantRecommendation, setPlantRecommendation] = useState(null);
  console.log(userInfo, isLogin);
  // 김동현 2022.10.05 - 유저 정보 변화 감지
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLogin(true);
        setUserInfo(user);
      } else {
        setIsLogin(false);
      }
    });
  }, []);
  return (
    <>
      <AppRouter
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        plantRecommendation={plantRecommendation}
        setPlantRecommendation={setPlantRecommendation}
      />
    </>
  );
};

export default App;
