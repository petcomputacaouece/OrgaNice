import React from 'react';

// --- Componente 1: A linha individual do usuário ---
const RankingItem = ({ user, rank }) => {
    // Lógica visual baseada na posição
    let barColor = "bg-transparent";
    let medalDisplay = <span className="text-xl font-bold text-gray-400 pl-4">#{rank}</span>;
    let rowBg = "hover:bg-gray-50"; // Cor padrão de hover

    // Estilização para os Top 3
    if (rank === 1) {
        barColor = "bg-yellow-400"; 
        medalDisplay = <span className="text-3xl filter drop-shadow-sm">🥇</span>;
        rowBg = "bg-yellow-50/30 hover:bg-yellow-50/60"; // Destaque sutil no fundo
    } else if (rank === 2) {
        barColor = "bg-gray-400";
        medalDisplay = <span className="text-3xl filter drop-shadow-sm">🥈</span>;
    } else if (rank === 3) {
        barColor = "bg-orange-500";
        medalDisplay = <span className="text-3xl filter drop-shadow-sm">🥉</span>;
    }

    return (
        <div className={`relative flex items-center justify-between p-4 border-b border-gray-100 last:border-0 transition-colors h-20 ${rowBg}`}>
            
            {/* Barra Colorida na esquerda (decoração) */}
            <div className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r ${barColor}`}></div>

            <div className="flex items-center gap-6 pl-4">
                {/* Ícone da Medalha/Posição */}
                <div className="w-12 flex justify-center items-center">
                    {medalDisplay}
                </div>

                {/* Avatar + Nome + Info */}
                <div className="flex items-center gap-4">
                    {/* Avatar (Placeholder) */}
                    <img 
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} 
                        alt={user.name} 
                        className="w-10 h-10 rounded-full border border-gray-200"
                    />
                    
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg text-gray-800 leading-tight">
                            {user.name}
                        </span>
                        <span className="text-sm text-gray-500">
                            {user.tasks} tarefas concluídas
                        </span>
                    </div>
                </div>
            </div>

            {/* Pontuação Final */}
            <div className="pr-6 text-right">
                <div className="text-2xl font-bold text-indigo-900">
                    {user.score.toFixed(1).replace('.', ',')}
                </div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Pontos
                </div>
            </div>
        </div>
    );
};

// --- Componente Principal: A Página ou Bloco do Ranking ---
const Ranking = () => {
    // Dados Mockados (Simulando o banco de dados)
    const rankingData = [
        { id: 1, name: "Lucas Levi", tasks: 15, score: 9.5 },
        { id: 2, name: "Vanessa Andrade", tasks: 12, score: 8.9 },
        { id: 3, name: "Rian Villanova", tasks: 10, score: 8.5 },
        { id: 4, name: "Beatriz", tasks: 6, score: 7.5 },
        { id: 5, name: "Vitor Fontenele", tasks: 5, score: 7.0 },
        { id: 6, name: "Camila", tasks: 4, score: 6.5 },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                
                {/* Cabeçalho da Página */}
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Ranking Geral</h1>
                        <p className="text-gray-500 text-sm">Acompanhe o desempenho e a pontuação dos membros.</p>
                    </div>
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm active:transform active:scale-95">
                        Atualizar Lista
                    </button>
                </div>

                {/* Card do Ranking */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Cabeçalho da Tabela (Opcional, pode remover se quiser visual mais limpo) */}
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <span className="pl-16">Membro</span>
                        <span className="pr-6">Pontuação Total</span>
                    </div>

                    <div className="flex flex-col">
                        {rankingData.map((user, index) => (
                            <RankingItem 
                                key={user.id} 
                                user={user} 
                                rank={index + 1} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ranking;