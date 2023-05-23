import './App.css'
import About from './assets/components/About/About'
import Contact from './assets/components/Contact/Contact'
import Hero from './assets/components/Hero/Hero'
import Navbar from './assets/components/Navbar/Navbar'
import Projects from './assets/components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
