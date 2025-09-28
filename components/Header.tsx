
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tight">
          Revenue Sprint <span className="text-cyan-400">30/30</span>
        </div>
        <a
          href="#pricing"
          className="hidden md:inline-block bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg shadow-cyan-500/20"
        >
          Ver Planos
        </a>
      </div>
    </header>
  );
};

export default Header;
