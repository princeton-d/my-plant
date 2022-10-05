import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import PlantPick from '../routes/PlantPick/PlantPick';
import UserGarden from '../routes/UserGarden/UserGarden';
import PlantRecommendation from '../routes/PlantRecommendation/PlantRecommendation'
import Navigation from '../components/Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import RecommendationNavigation from './recommendationNavigation/recommendationNavigation'

const AppRouter = (props) => {
  return (
    <Router>
      {/* 김동현 2022.10.04 로그인 후 네비게이션 바 보임 */}
      {props.isLogin ? <Navigation setPlantRecommendation={props.setPlantRecommendation} /> : <AuthNavigation setIsLogin={props.setIsLogin} setUserInfo={props.setUserInfo} />}
      {props.plantRecommendation ? <RecommendationNavigation /> : null}
      <Routes>
        {props.isLogin ? <Route path='/' element={<PlantPick />} /> : <Route path='/' element={<Home />} />}
        <Route path='/garden' element={<UserGarden />} />
        <Route path='/recommendation' element={<PlantRecommendation />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;