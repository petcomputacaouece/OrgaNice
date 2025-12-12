export default class RankingLogic {
    constructor(selector) {
        this.container = document.querySelector(selector);
        
        // Dados simulados
        this.users = [
            { id: 1, name: "Lucas Levi", tasks: 15, score: 10 },
            { id: 2, name: "Vanessa Andrade", tasks: 12, score: 10 },
            { id: 3, name: "Rian Villanova", tasks: 10, score: 8.5 },
            { id: 4, name: "Beatriz", tasks: 6, score: 7.5 },
            { id: 5, name: "Vitor Fontenele", tasks: 5, score: 7.0 },
            { id: 6, name: "Camila", tasks: 4, score: 6.5 },
        ];
    }

    render() {
        if (!this.container) return;
        
        const rankingHTML = this.users.map((user, index) => {
            const rank = index + 1;
            
            // Lógica visual do Ranking (Top 3)
            let barColor = "bg-transparent";
            let medalDisplay = `<span class="text-xl font-bold text-gray-400 pl-4">#${rank}</span>`;
            let rowBg = "hover:bg-gray-50"; 

            if (rank === 1) {
                barColor = "bg-yellow-400"; 
                medalDisplay = `<span class="text-3xl">🥇</span>`;
                rowBg = "bg-yellow-50/30 hover:bg-yellow-50/60"; 
            } else if (rank === 2) {
                barColor = "bg-gray-400";
                medalDisplay = `<span class="text-3xl">🥈</span>`;
            } else if (rank === 3) {
                barColor = "bg-orange-500";
                medalDisplay = `<span class="text-3xl">🥉</span>`;
            }

            return `
                <div class="relative flex items-center justify-between p-4 border-b border-gray-100 last:border-0 transition-colors h-20 ${rowBg}">
                    
                    <div class="absolute left-0 top-3 bottom-3 w-1.5 rounded-r ${barColor}"></div>

                    <div class="flex items-center gap-6 pl-4">
                        <div class="w-12 flex justify-center items-center">
                            ${medalDisplay}
                        </div>

                        <div class="flex items-center gap-4">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff" 
                                class="w-10 h-10 rounded-full border border-gray-200" alt="${user.name}"/>
                            
                            <div class="flex flex-col">
                                <span class="font-semibold text-lg text-gray-800 leading-tight">
                                    ${user.name}
                                </span>
                                <span class="text-sm text-gray-500">
                                    ${user.tasks} tarefas concluídas
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="pr-6 text-right">
                        <div class="text-2xl font-bold text-indigo-900">
                            ${user.score.toFixed(1).replace('.', ',')}
                        </div>
                        <div class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                            Pontos
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        this.container.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <span class="pl-16">Membro</span>
                    <span class="pr-6">Pontuação Total</span>
                </div>
                
                <div class="flex flex-col">
                    ${rankingHTML}
                </div>
            </div>
        `;
    }
}