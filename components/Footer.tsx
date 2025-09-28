
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <div className="text-2xl font-bold text-white tracking-tight mb-4">
          Revenue Sprint <span className="text-cyan-400">30/30</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Revenue Sprint. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Acelerando o crescimento de empresas ambiciosas.</p>
      </div>
    </footer>
  );
};

export default Footer;
