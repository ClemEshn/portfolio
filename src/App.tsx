import './App.css'
import About from './components/about/about'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <About/>
      <Projects/>
    </>
  )
}

export default App
