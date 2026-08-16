// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import Hero from './components/Hero'
// import About from './components/About'
import Projects from './components/Projects'
// import Contact from './components/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <h1>
    //   Ciao, sono Dario Lunni
    // </h1>
    <>
      <Hero nome="Dario" ruolo="Freelance engineer" tagline="Build stuff and get things done" />
      <Projects />
    </>
  )
}

export default App
