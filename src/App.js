import React from 'react';
import Top from './components/Top';
import About from './components/About';
import Languages from './components/Languages';
import Callout from './components/Callout';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'
// Bootstrap
import '../src/vendor/bootstrap/css/bootstrap.min.css';
// Custom CSS
import '../src/css/stylish-portfolio.min.css';
import '../src/css/stylish-portfolio.css';
// Line CSS
import '../src/vendor/simple-line-icons/css/simple-line-icons.css';


function App() {
  return (
    <div>
      <Top />
      <About 
      title="About"
      id="About"
      />
      <Languages 
      title="Languages"
      id="Languages"
      />
      <Callout />
      <Portfolio />
      <Footer />
    </div>

  )
}

export default App;