import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Solution } from './components/Solution';
import { Innovation } from './components/Innovation';
import { TechnicalApproach } from './components/TechnicalApproach';
import { InnovationInAction } from './components/InnovationInAction';
import { Impact } from './components/Impact';
import { Team } from './components/Team';
import { Mentors } from './components/Mentors';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solution />
        <Innovation />
        <TechnicalApproach />
        <InnovationInAction />
        <Impact />
        <Team />
        <Mentors />
      </main>
      <Footer />
    </div>
  );
};

export default App;
