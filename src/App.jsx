import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/about"
import Projects from "./components/projects/projects"
import Footer from "./components/footer/footer"
import './index.css'
import Contact from "./components/contact/contact"
import Github from "./components/githubapi/github"
function App() {
  

  return (
   <>
      <Header/>
      <About/>
      <Projects/>
      <Nav/>
      <Contact/>
      <Footer/>
      
   </>
  )
}

export default App
