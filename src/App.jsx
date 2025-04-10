import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';

const App = () => {
  return (    
    <>
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer/>
    </>
  );
}

export default App;
