import React from 'react';
import './Menu.css';
import { MenuItems } from './Items';
import { Food } from './MenuItem';

let items = []
MenuItems.forEach((item) => {
  items.push(<Food
  name={item.name}
  description={item.description}
  price={item.price}
  image={item.image}
  />)
})

function Menu() {
  return (
    <div className="container">
      <div class="menu">
        <h1 className="menu-title">
          MENU
        </h1>
        {items}
      </div>
    </div>
  )
}

export default Menu
