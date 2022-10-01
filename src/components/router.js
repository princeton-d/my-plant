import { HashRouter as Router, Routes, Route } from 'react-router-dom' // BrowserRouter as Router 도 사용가능(차이점 있음)
import Home from '../routes/Home/Home'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;