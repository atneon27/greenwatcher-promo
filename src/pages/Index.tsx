
import React from 'react';
import { 
  Navbar, 
  Hero, 
  Features, 
  HowItWorks, 
  Benefits, 
  CTA, 
  Footer 
} from '@/components';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
