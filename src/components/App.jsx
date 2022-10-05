import React, { useState } from 'react';
import classes from './App.module.css';
import AppRouter from './router';

const App = () => {
  // 김동현 2022.10.04 - true: 네비게이션, false: 인증화면 출력(임시 테스트용)
  const [isLogin, setIsLogin] = useState(false);
  const [plantRecommendation, setPlantRecommendation] = useState(false);
  return (
    <>
      <AppRouter
        isLogin={isLogin}
        plantRecommendation={plantRecommendation}
        setPlantRecommendation={setPlantRecommendation}
      />
    </>
  );
};

export default App;
