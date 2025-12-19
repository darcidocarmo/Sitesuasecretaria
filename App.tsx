import React from 'react';
import { Navbar, Footer, FloatingWhatsApp } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { BestPractices } from './components/BestPractices';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 text-base">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <BestPractices />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;