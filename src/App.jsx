import React from 'react'
import './App.scss'
import { FirstPart } from '../src/components/FirstPart'
import { SecondPart } from './components/SecondPart'
import { Footer } from './components/Footer'
import { FooterMob } from './components/FooterMob'

function App() {
  return (
    <>
    <FirstPart />
    <SecondPart />
    {window.screen.width > 768 ? (
      <Footer />
      ) : (
      <FooterMob />
      )
    } 
    </>
  )
}

export default App
