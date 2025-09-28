
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import Deliverables from './components/Deliverables';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Benefits />
        <Deliverables />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default App;
