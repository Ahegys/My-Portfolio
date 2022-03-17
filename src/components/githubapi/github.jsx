import { useEffect, useState } from 'react'

import './github.css'
const Github = () => {
    const [repo, setRepo] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Ahegys/repos')
        .then(response => response.json()).then(data => setRepo(data))
    },[])
  return (
      <div>
          <ul>{repo.map(repository => {
              return (
                  <li>
                      <h3>{repository.name}</h3>
                      <p>{repository.description}</p>
                      <a href={repository.html_url} target='_blank'>Learn More</a>
                  </li>
              )
          })}</ul>
      </div>
      
  )
}

export default Github