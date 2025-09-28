
import React from 'react';

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const Guarantee: React.FC = () => {
  return (
    <section id="guarantee" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 border border-cyan-500/30 rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center shadow-lg">
          <div className="flex justify-center mb-6">
            <ShieldCheckIcon />
          </div>
          <h2 className="text-3xl font-bold text-white">Nosso Risco-Reverso</h2>
          <p className="text-xl text-cyan-400 font-semibold mt-1">Performance Garantida ou Pausa</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto my-6"></div>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nossa confiança está no método. Se não gerarmos um aumento (lift) de no mínimo <span className="font-bold text-white">15%</span> nas oportunidades em 30 dias, você tem o direito de pausar o projeto sem nenhuma multa ou burocracia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
