import React from 'react'
import Menu from '../components/menu/Menu.jsx'
import StoreContextProvider from '../components/context/StoreContext.jsx'
import FoodDisplay from '../components/fooddisplay/FoodDisplay.jsx'

const MenuPage = () => {
  return (
    <div>
      <Menu />
      <StoreContextProvider>
        <FoodDisplay />
      </StoreContextProvider>
    </div>
  )
}

export default MenuPage

