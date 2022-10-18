import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { authService } from '../service/fbase';
import classes from './App.module.css';
import AppRouter from './router';
import plantInfo from '../data/plantInfo.json';

const App = () => {
  // 김동현 2022.10.04 - true: 네비게이션, false: 인증화면 출력(임시 테스트용)
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [plantRecommendation, setPlantRecommendation] = useState(null);
  const [checkState, setCheckState] = useState({
    1: false, // 식물을 처음 키워봐요
    2: false, // 식물을 키워본적 있어요
    3: false, // 햇볕맛집!
    4: false, // 맛집까진..
    5: false, // 따뜻해요
    6: false, // 서늘해요
    7: false, // 공기정화를 하고싶어요
    8: false, // 반려동물/아이에게 안전해요
    9: false, // 예쁜 잎을 감상하고 싶어요
    10: false, // 꽃이 피었으면 좋겠어요
    11: false, // 열매가 맺혔으면 좋겠어요
    12: false, // 다육이/선인장이 좋아요
  });
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
  const handleCheckbox = (e) => {
    const key = e.target.id;
    setCheckState((prev) => {
      if (key === '1') return { ...prev, [key]: e.target.checked, 2: false };
      else if (key === '2')
        return { ...prev, [key]: e.target.checked, 1: false };
      else if (key === '3')
        return { ...prev, [key]: e.target.checked, 4: false };
      else if (key === '4')
        return { ...prev, [key]: e.target.checked, 3: false };
      else if (key === '5')
        return { ...prev, [key]: e.target.checked, 6: false };
      else if (key === '6')
        return { ...prev, [key]: e.target.checked, 5: false };
      else return { ...prev, [key]: e.target.checked };
    });
  };

  const resultPlant = [];

  const filters = () => {
    const PLANT = plantInfo.plant;
    const plants = [];
    checkState[1]
      ? plants.push(PLANT.filter((item) => item.Difficulty.includes('easy')))
      : plants.push();
    checkState[2]
      ? plants.push(
          PLANT.filter((item) =>
            item.Difficulty.some((i) => ['normal', 'hard'].includes(i))
          )
        )
      : plants.push();
    checkState[3]
      ? plants.push(
          PLANT.filter((item) =>
            item.amountOfSunshine.some((i) => ['반양지', '양지'].includes(i))
          )
        )
      : plants.push();
    checkState[4]
      ? plants.push(
          PLANT.filter((item) =>
            item.amountOfSunshine.some((i) => ['반음지', '음지'].includes(i))
          )
        )
      : plants.push();
    checkState[5]
      ? plants.push(PLANT.filter((item) => item.Temperature.includes(21)))
      : plants.push();
    checkState[6]
      ? plants.push(PLANT.filter((item) => item.Temperature.includes(17)))
      : plants.push();
    checkState[7]
      ? plants.push(PLANT.filter((item) => item.function.includes('공기정화')))
      : plants.push();
    checkState[8]
      ? plants.push(
          PLANT.filter((item) =>
            item.Characteristics.includes('반려동물과 어린아이 괜찮아요')
          )
        )
      : plants.push();
    checkState[9]
      ? plants.push(
          PLANT.filter((item) =>
            item.Characteristics.includes('잎을 감상하기 좋아요')
          )
        )
      : plants.push();
    checkState[10]
      ? plants.push(
          PLANT.filter((item) => item.Characteristics.includes('꽃을 감상하는'))
        )
      : plants.push();
    checkState[11]
      ? plants.push(
          PLANT.filter((item) => item.Characteristics.includes('열매가 열리는'))
        )
      : plants.push();
    checkState[12]
      ? plants.push(
          PLANT.filter((item) => item.Characteristics.includes('다육/선인장'))
        )
      : plants.push();
    const newArr = [...plants];
    const filterArr = (arr) =>
      arr.filter((item, index) => arr.indexOf(item) !== index);

    let i = 1;
    while (i < 13) {
      if (newArr.length < 2) {
        resultPlant.push(...newArr);
        break;
      } else {
        newArr.push(filterArr(newArr[0].concat(newArr[1])));
        newArr.splice(0, 2);
        i++;
      }
    }
  };
  filters();
  return (
    <>
      {isLogin && (
        <AppRouter
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          plantRecommendation={plantRecommendation}
          setPlantRecommendation={setPlantRecommendation}
          checkState={checkState}
          setCheckState={setCheckState}
          handleCheckbox={handleCheckbox}
          resultPlant={resultPlant}
        />
      )}
    </>
  );
};

export default App;
