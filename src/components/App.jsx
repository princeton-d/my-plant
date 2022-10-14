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
  // 김동현 2022-10-14 다중필터기능
  const [checkState, setCheckState] = useState({
    식물을처음키워봐요: false,
    식물을키워본적있어요: false,
    햇볕맛집: false,
    맛집까진: false,
    따뜻해요: false,
    서늘해요: false,
    공기정화를하고싶어요: false,
    반려동물아이에게안전해요: false,
    예쁜잎을감상하고싶어요: false,
    꽃이피었으면좋겠어요: false,
    열매가맺혔으면좋겠어요: false,
    다육이선인장이좋아요: false,
  });
  return (
    <>
      <AppRouter
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        plantRecommendation={plantRecommendation}
        setPlantRecommendation={setPlantRecommendation}
        checkState={checkState}
        setCheckState={setCheckState}
      />
    </>
  );
};

export default App;
