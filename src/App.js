import React from 'react';
import { Router } from "react-router-dom";
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Callout from './components/Callout';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Hero />,
      <About />,
      <Languages />,
      <Callout />,
      <Portfolio />
    </Router>
  )
}

export default App;