import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div>
        <div className="header__socials">
            <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="http://github.com" target="_blank"><FaGithub/></a>
            
        </div>
    </div>
  )
}

export default HeaderSocial