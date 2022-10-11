import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import PlantPick from '../routes/PlantPick/PlantPick';
import UserGarden from '../routes/UserGarden/UserGarden';
import PlantRecommendation from '../routes/PlantRecommendation/PlantRecommendation'
import Navigation from '../components/Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';

const AppRouter = (props) => {
  return (
    <Router>
      {/* 김동현 2022.10.07 로그인 후 네비게이션 바 보임 */}
      {props.isLogin ? <Navigation userInfo={props.userInfo} setIsLogin={props.setIsLogin} setPlantRecommendation={props.setPlantRecommendation} /> : <AuthNavigation setIsLogin={props.setIsLogin} setUserInfo={props.setUserInfo} />}
      <Routes>
        {props.isLogin ? <Route path='/my-plant' element={<PlantPick userInfo={props.userInfo} />} /> : <Route path='/my-plant' element={<Home />} />}
        <Route path='/my-plant/garden' element={<UserGarden userInfo={props.userInfo} />} />
        <Route path='/my-plant/recommendation' element={<PlantRecommendation userInfo={props.userInfo} setPlantRecommendation={props.setPlantRecommendation} />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;

