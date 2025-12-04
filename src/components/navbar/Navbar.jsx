import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState, useEffect } from 'react'    
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [men, setMenu] = useState("home");

    useEffect(() => {
        // Update active menu based on current route
        if (location.pathname === '/home' || location.pathname === '/') {
            setMenu("home");
        } else if (location.pathname === '/menu') {
            setMenu("menu");
        } else if (location.pathname === '/mobile-app') {
            setMenu("mobile-app");
        } else if (location.pathname === '/contact-us') {
            setMenu("contact-us");
        }
    }, [location.pathname]);

    const handleHomeClick = () => {
        setMenu("home");
        navigate('/home');
    };

    const handleMenuClick = () => {
        setMenu("menu");
        navigate('/menu');
    };

    const handleMobileAppClick = () => {
        setMenu("mobile-app");
        navigate('/mobile-app');
    };

    const handleContactClick = () => {
        setMenu("contact-us");
        navigate('/contact-us');
    };

  return (
    <div className='navbar'>
      <img src={assets.zomoto} alt="" className="logo" onClick={handleHomeClick} />
      <ul className="navbar-menu">
        <li onClick={handleHomeClick} className={men==="home"?"active":""}>home</li>
        <li onClick={handleMenuClick} className={men==="menu"?"active":""}>menu</li>
        <li onClick={handleMobileAppClick} className={men==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={handleContactClick} className={men==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.bag_icon} alt="" onClick={()=>navigate('/cart')} />
            <div className="dot"></div>
        </div>
        <button onClick={() => navigate("/")}>log out</button>
      </div>
    </div>
  )
}

export default Navbar
