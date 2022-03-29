/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import validator from 'validator'

import logoIconWhite from '../../assets/logo-white.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import youtubeIcon from '../../assets/icon-youtube.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'

import './styles.scss'

export function Footer() {
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState('')

  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      console.log("validator", email)
      setEmailError('Please insert a valid email')      
    } else {
      setEmailError('Sent with success')
    }
  }

  console.log("validator", email)

  return (
    <div className="container-footer">
      <div className="row1">
        <img src={logoIconWhite} alt="Logo" />
        <div className="medias">        
          <img src={facebookIcon} alt="Facebook icon" />
          <img src={youtubeIcon} alt="Youtube icon" />
          <img src={twitterIcon} alt="Twitter icon" />
          <img src={pinterestIcon} alt="Pinterest icon" />
          <img src={instagramIcon} alt="Instagram icon" />
        </div>
      </div>
      <div className="row2">
        <a>Home</a>
        <a>Pricing</a>
        <a>Products</a>
        <a>About Us</a>
      </div>
      <div className="row2">
        <a>Careers</a>
        <a>Community</a>
        <a>Privacy Policy</a>
      </div>
      <div className="row4">
        <form className="upd-email">
          <div className="ipt-error">
            <input
              type="text"
              name="email-inpt"
              id="email-inpt"
              className="email-inpt"
              placeholder="Updates in your inbox..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error-field">{emailError}</span>
          </div>
          <button 
            type="button"
            onClick={validateEmail}
          >
            Go
          </button>
        </form>
        <p>Copyright 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}