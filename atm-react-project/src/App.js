import './App.css';
import ArpNavBar from './components/ArpNavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className="App bg-dark">
      <ArpNavBar />
      <Routes>
        <Route path='/login' element={<Login />} exact />
        <Route path='/public_dashboard' element={<Dashboard />}/>
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
