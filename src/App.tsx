import './App.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Projects from './components/projects/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import Socials from './components/socials/Socials'
import FallingLeaves from './components/fallingLeaves/FallingLeaves'

function App() {
  return (
    <>
      <Header />
      <FallingLeaves />
      <Socials/>
      <About/>
      <Products/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
