import React, { useEffect } from 'react';
import RankingLogic from '../js/functions/Ranking.js'; // Caminho corrigido

const Ranking = () => {
    useEffect(() => {
        const ranking = new RankingLogic('#ranking-content');
        ranking.render();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Ranking Geral</h1>
                        <p className="text-gray-500 text-sm">Acompanhe o desempenho dos membros.</p>
                    </div>
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
                        Atualizar Lista
                    </button>
                </div>
                <div id="ranking-content"></div> {/* O JS entra aqui */}
            </div>
        </div>
    );
};

export default Ranking;