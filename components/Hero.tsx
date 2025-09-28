
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Revenue Sprint <span className="text-cyan-400">30/30</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-cyan-300 font-light max-w-4xl mx-auto">
          +30% de Oportunidades no Pipeline. Em até 30 Dias.
        </p>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          Um acelerador de resultados para líderes de marketing e vendas que precisam de um aumento rápido e mensurável no volume de oportunidades qualificadas.
        </p>
        <div className="mt-10">
          <a
            href="#pricing"
            className="bg-cyan-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
