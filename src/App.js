import Login from './Login';
import Welcome from './Welcome';
import Cart from './Cart';
import Checkout from './Checkout';
import Signup from './Signup';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/> 
          <Route path='/welcome' element={<Welcome />}/> 
          <Route path='/signup' element={<Signup />}/> 
          <Route path='/cart' element={<Cart />}/> 
          <Route path='/checkout' element={<Checkout />}/> 
        </Routes>
      </BrowserRouter>
      </>
      
  );
}

export default App;
