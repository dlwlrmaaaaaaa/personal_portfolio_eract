import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
const App = () => {
  return (    
    <>
      <NavBar/>
      <Home/>
      <Projects/>
      <About/>
    </>
  )
}

export default App