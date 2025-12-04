import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Cart from './components/cart/Cart.jsx';
import Home from './Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Payment from './components/payment/Payment.jsx';
import MenuPage from './pages/MenuPage.jsx';
import MobileAppPage from './pages/MobileAppPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const HeaderWrapper = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Navbar /> : null;
};
  
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <HeaderWrapper />
        <Routes> 
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/mobile-app' element={<MobileAppPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pay' element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
