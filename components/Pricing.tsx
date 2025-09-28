
import React from 'react';

const DollarSignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    </svg>
);

const PricingCard: React.FC<{ title: string; price: string; description: string; featured?: boolean }> = ({ title, price, description, featured = false }) => (
    <div className={`p-8 rounded-xl border ${featured ? 'bg-slate-800 border-cyan-500 shadow-2xl shadow-cyan-500/20' : 'bg-slate-800/50 border-slate-700'}`}>
        <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wider">{title}</h3>
        <p className="mt-4 text-4xl font-extrabold text-white">{price}</p>
        <p className="mt-2 text-slate-400">{description}</p>
    </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Investimento Orientado a Resultado</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard title="Setup" price="R$ 28.000" description="Pagamento único inicial" />
          <PricingCard title="Mensalidade" price="R$ 12.000" description="Durante o projeto" featured={true} />
          <PricingCard title="Success Fee" price="10%" description="Sobre receita incremental" />
        </div>
        <div className="text-center mt-12">
            <a href="#" className="bg-cyan-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30">
                Agendar Análise Estratégica
            </a>
            <p className="text-slate-500 mt-4 text-sm">Vagas limitadas para garantir a entrega de resultados.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
