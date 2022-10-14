import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import PlantPick from '../routes/PlantPick/PlantPick';
import UserGarden from '../routes/UserGarden/UserGarden';
import PlantRecommendation from '../routes/PlantRecommendation/PlantRecommendation'
import Navigation from '../components/Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import RecommendationNavigation from './RecommendationNavigation/RecommendationNavigation';
import SearchResult from '../routes/SearchResult/SearchResult';

const AppRouter = (props) => {
  return (
    <Router>
      {/* 김동현 2022.10.07 로그인 후 네비게이션 바 보임 */}
      {props.isLogin ? <Navigation userInfo={props.userInfo} setIsLogin={props.setIsLogin} setPlantRecommendation={props.setPlantRecommendation} /> : <AuthNavigation setIsLogin={props.setIsLogin} setUserInfo={props.setUserInfo} />}
      {props.plantRecommendation && <RecommendationNavigation setPlantRecommendation={props.setPlantRecommendation} checkState={props.checkState} setCheckState={props.setCheckState} handleCheckbox={props.handleCheckbox} />}
      <Routes>
        {props.isLogin ? <Route path='/my-plant' element={<PlantPick userInfo={props.userInfo} />} /> : <Route path='/my-plant' element={<Home />} />}
        <Route path='/my-plant/garden' element={<UserGarden userInfo={props.userInfo} />} />
        <Route path='/my-plant/recommendation' element={<PlantRecommendation userInfo={props.userInfo} setPlantRecommendation={props.setPlantRecommendation} />} />
        <Route path='/my-plant/search' element={<SearchResult userInfo={props.userInfo} />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;

