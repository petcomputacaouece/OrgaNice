import React, { useEffect, useState } from 'react';
import MembrosLogic from '../js/functions/Membros.js'; 

const Membros = () => {
    const [viewMode, setViewMode] = useState('list');

    useEffect(() => {
        const logic = new MembrosLogic('#membros-content');
        logic.render(viewMode);
    }, [viewMode]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Geral / Membros</h1>
                        <p className="text-gray-500 text-sm">Lista de Membros</p>
                    </div>
                    <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm flex items-center">
                        <button onClick={() => setViewMode('list')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'}`}>Lista</button>
                        <button onClick={() => setViewMode('grid')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'}`}>Cards</button>
                    </div>
                </div>
                <div id="membros-content"></div>
            </div>
        </div>
    );
};

export default Membros;