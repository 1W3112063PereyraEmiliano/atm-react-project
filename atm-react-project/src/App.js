import './App.css';
import ArpNavBar from './components/ArpNavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoutes from './utils/PrivateRoutes'

const App = () => {
  return (
    <div className="App">
      <ArpNavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} exact/>
          {/* <Route path='/other' element={<Other />}/> */}
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
