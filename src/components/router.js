import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../routes/Home/Home'
import PlantPick from "../routes/PlantPick/PlantPick"
import Navigation from '../components/Navigation/Navigation'
import AuthNavigation from './AuthNavigation/AuthNavigation';

const AppRouter = ({ isLogin }) => {
  return (
    <Router>
      {/* 김동현 2022.10.04 로그인 후 네비게이션 바 보임 */}
      {isLogin ? <Navigation /> : <AuthNavigation />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plant_pick' element={<PlantPick />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;