import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Home from './components/About';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  const style = {
    backgroundColor: '#404A47', // Set the background color here
    color: '#FFBA49',
  };

  return (
    
    <Router>
      <CssBaseline />
      <div style={style}> {/* Apply the background color to a div */}
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;