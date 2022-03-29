/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import logoImg from '../../assets/logo.svg'
import burgerImg from '../../assets/icon-hamburger.svg'
import closeImg from '../../assets/icon-close.svg'

import './styles.scss'

export function NavMob() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <div className="header-box">
      <img src={logoImg} alt="Logo" className="logo-mob"/>
      <img 
        src={toggle === true 
            ? closeImg 
            : burgerImg
        } 
        alt="Hamburger Menu Icon" 
        className="burger" 
        onClick={handleToggle}
      />
      <div className={toggle === true ? "menu-box" : "hidden-menu-box menu-box"}>
        <a className="first-link">
          Pricing        
        </a>
        <a className="first-link">
          Product         
        </a>
        <a className="first-link">
          About Us        
        </a>
        <a className="first-link">
          Careers         
        </a>
        <a className="first-link">
          Community         
        </a>
      </div>
    </div>    
  )
}