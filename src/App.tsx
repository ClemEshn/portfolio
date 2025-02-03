import './App.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

import 'bootstrap/dist/css/bootstrap.min.css'
import Socials from './components/socials/Socials'

function App() {
  return (
    <>
      <Header />
      <Socials/>
      <About/>
      <Products/>
      <Projects/>
      {/* <Skills/> */}
      <Contact/>
    </>
  )
}

export default App
