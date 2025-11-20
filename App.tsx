import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <main className="min-h-screen bg-dark relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>} />
          <Route path="/google2d28759af1d84347.html" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
