import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from '../src/components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-no-repeat bg-hero-pattern bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />

        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
