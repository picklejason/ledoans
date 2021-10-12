import React from 'react'
import './Header.css';
import { FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <>
      <div className="header">
        <div class="title">
          Lé'Doàns
        </div>
        <div className="icons">
          <a className="icon" href="https://www.instagram.com/ledoansbakery/" target="_">
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
