
import React from 'react';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface DeliverableCardProps {
  title: string;
  description: string;
}

const DeliverableCard: React.FC<DeliverableCardProps> = ({ title, description }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 pt-1">
        <CheckCircleIcon />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

const Deliverables: React.FC = () => {
  const items = [
    { title: 'Backlog de Otimização', description: 'Um plano claro de testes e hipóteses de crescimento.' },
    { title: '2 Landing Pages de Alta Performance', description: 'Para testar ângulos e ofertas distintas.' },
    { title: '3 Jornadas de Nutrição Automatizadas', description: 'Para maximizar a conversão de leads frios em quentes.' },
    { title: 'Gestão de Tráfego e Disparos', description: 'Execução e otimização diária das campanhas.' },
    { title: 'Revisão Semanal Executiva', description: 'Relatório de performance direto ao ponto, focado em decisões.' },
  ];

  return (
    <section id="deliverables" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Como Fazemos Acontecer</h2>
          <p className="text-lg text-slate-400 mt-2">Nossas Entregas Estratégicas</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6">
          {items.map((item, index) => (
            <DeliverableCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
