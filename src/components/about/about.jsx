import React from 'react'
import './about.css'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src="" alt="About Image" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>My Projects</h5>
            <small>Projects On My GitHub</small>
          </article>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sint esse quas enim autem quaerat at, molestias quod facilis ea veritatis iusto alias velit porro magnam, voluptas, quidem harum rem?</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
      </div>
    </section>
  )
}
export default About