/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logoImg from '../../assets/logo.svg'

import './styles.scss'

export function Nav() {
  return (
    <div className="nav-content">
      <img src={logoImg} alt="Logo" />
      <div className="links">
        <a>Pricing</a>
        <a>Product</a>
        <a>About Us</a>
        <a>Careers</a>
        <a>Community</a>
      </div>
      <button type="button" className="btn-start">Get Started</button>
    </div>
  )
}