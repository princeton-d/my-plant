import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import PlantPick from '../routes/PlantPick/PlantPick';
import UserGarden from '../routes/UserGarden/UserGarden';
import PlantRecommendation from '../routes/PlantRecommendation/PlantRecommendation'
import Navigation from '../components/Navigation/Navigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import RecommendationNavigation from './recommendationNavigation/recommendationNavigation'

const AppRouter = ({ isLogin, plantRecommendation, setPlantRecommendation }) => {
  return (
    <Router>
      {/* 김동현 2022.10.04 로그인 후 네비게이션 바 보임 */}
      {!isLogin ? <Navigation setPlantRecommendation={setPlantRecommendation} /> : <AuthNavigation />}
      {plantRecommendation ? <RecommendationNavigation /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plant_pick' element={<PlantPick />} />
        <Route path='/garden' element={<UserGarden />} />
        <Route path='/recommendation' element={<PlantRecommendation />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;