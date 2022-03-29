/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import validator from 'validator'

import logoIconWhite from '../../assets/logo-white.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import youtubeIcon from '../../assets/icon-youtube.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'

import './styles.scss'

export function FooterMob() {
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
    <div className="container-footer-mob">
      <form className="upd-email-mob">
          <div className="ipt-error-mob">
            <input
              type="text"
              name="email-inpt"
              id="email-inpt"
              className="email-inpt-mob"
              placeholder="Updates in your inbox..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error-field-mob">{emailError}</span>
          </div>
          <button 
            type="button"
            onClick={validateEmail}
            className="btn-go"
          >
            Go
          </button>
        </form>
        <div className="links-mob">
          <div className="row1-mob">
            <a>Home</a>
            <a>Pricing</a>
            <a>Products</a>
            <a>About Us</a>
          </div>
          <div className="row1-mob">
            <a>Careers</a>
            <a>Community</a>
            <a>Privacy Policy</a>
          </div>
        </div>
        <div className="medias-mob">
          <img 
            src={facebookIcon} 
            alt="Facebook icon" 
            className="icon-medias" 
          />
          <img src={youtubeIcon} 
            alt="Youtube icon" 
            className="icon-medias" 
          />
          <img 
            src={twitterIcon} 
            alt="Twitter icon" 
            className="icon-medias" 
          />
          <img 
            src={pinterestIcon} 
            alt="Pinterest icon" 
            className="icon-medias" 
          />
          <img 
            src={instagramIcon} 
            alt="Instagram icon" 
            className="icon-medias" 
          />
        </div>
        <img 
          src={logoIconWhite} 
          alt="Logo" 
          className="logo-mob" 
        />
        <p>Copyright 2022. All Rights Reserved.</p>
    </div>
  )
}