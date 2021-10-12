import React from 'react';
import './MenuItem.css';

export const Food = ({name, description, price, image}) => {
  return (

    <div className="menu-item">

      <img src={image} alt="food" className="menu-item-image" />

      <div className="menu-item-text">

        <h3 className="menu-item-heading">
          <span className="menu-item-name">
            {name}
          </span>
          <span className="menu-divider">
            |
          </span>
          <span className="menu-item-price">
            {price}
          </span>
        </h3>
        
        <p className="menu-item-description">
          {description}
        </p>

      </div>

    </div>

  )
}
