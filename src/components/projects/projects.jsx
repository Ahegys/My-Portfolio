import React from 'react'
import './projects.css'
import Github from '../githubapi/github'
export const Projects = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className='btn'>GitHub</a>
          <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            <Github/>
        </article>
      </div>
    </section>
  )
}
export default Projects