import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Heritage } from './components/Heritage';
import { Flavors } from './components/Flavors';
import { Newsletter } from './components/Newsletter';

const App: React.FC = () => {
  return (
    <div className="bg-[#1A0F0A] text-[#FFF8E7] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#1A0F0A]">
      <main>
        <Hero />
        <Features />
        <Heritage />
        <Flavors />
        <Newsletter />
      </main>
    </div>
  );
};

export default App;
