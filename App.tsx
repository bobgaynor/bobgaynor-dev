import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-dark relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ChatWidget />
    </main>
  );
};

export default App;