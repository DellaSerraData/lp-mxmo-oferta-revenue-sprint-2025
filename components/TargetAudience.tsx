
import React from 'react';

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const TargetAudience: React.FC = () => {
  return (
    <section id="target" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
                <TargetIcon />
            </div>
          <h2 className="text-3xl font-bold text-white mb-4">Para Quem é Ideal?</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300">
            Para <span className="font-bold text-cyan-400">líderes de marketing e vendas</span> sob pressão para entregar resultados de receita no curto prazo. Se sua meta é agressiva e você precisa de um aumento rápido e mensurável no volume de oportunidades qualificadas, este é o seu acelerador.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
