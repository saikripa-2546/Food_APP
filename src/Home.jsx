import React from 'react'
import StoreContextProvider from './components/context/StoreContext.jsx';
import Header from './components/header/Header.jsx';
import FoodDisplay from './components/fooddisplay/FoodDisplay.jsx';

const Home = () => {
  return (
    <div>
        <Header />
        <StoreContextProvider>
          <FoodDisplay />
        </StoreContextProvider>
    </div>
  )
}

export default Home
