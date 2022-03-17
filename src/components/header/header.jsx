import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './headerSocial'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello i'm</h5>
        <h1>Anderson Felipe</h1>
        <h5 className="text-light">front-end Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src="" alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header