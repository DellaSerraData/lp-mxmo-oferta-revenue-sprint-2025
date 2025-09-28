
import React from 'react';

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center mb-6">
                    <ChartBarIcon />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">O Que Você Conquista?</h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>

                <div className="bg-slate-800 p-8 md:p-12 rounded-xl max-w-3xl mx-auto shadow-2xl border border-slate-700">
                    <p className="text-lg text-slate-300 mb-4">Um sprint intenso e focado, projetado para um único objetivo: impacto no pipeline.</p>
                    <p className="text-6xl md:text-8xl font-extrabold text-white my-6">
                        <span className="text-cyan-400">+15%</span> a <span className="text-cyan-400">30%</span>
                    </p>
                    <p className="text-xl md:text-2xl text-slate-300 font-semibold">em oportunidades de negócio em um mês.</p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
