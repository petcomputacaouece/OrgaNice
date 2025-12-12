export default class Ranking {
    constructor(selector) {
        this.container = document.querySelector(selector);
        
        // Dados simulados (iguais ao seu exemplo)
        this.users = [
            { id: 1, name: "Rian", tasks: 15, score: 9.5 },
            { id: 2, name: "Vanessa", tasks: 10, score: 8.5 },
            { id: 3, name: "Lucas", tasks: 7, score: 8.0 },
            { id: 4, name: "Beatriz", tasks: 6, score: 7.5 },
            { id: 5, name: "Vitor", tasks: 5, score: 7.0 },
        ];
    }

    render() {
        if (!this.container) {
            console.error("Container do Ranking não encontrado!");
            return;
        }

        const rankingItems = this.users.map((user, index) => {
            const rank = index + 1;
            
            // Lógica de cores e ícones (traduzida do seu React)
            let barColor = "bg-transparent"; 
            let medalIcon = `<span class="text-xl font-bold text-gray-400 pl-4">#${rank}</span>`;

            // Configuração visual para os Top 3
            if (rank === 1) {
                barColor = "bg-yellow-400"; // Barra Dourada
                medalIcon = '<span class="text-3xl">🥇</span>'; 
            } else if (rank === 2) {
                barColor = "bg-gray-400";   // Barra Prata
                medalIcon = '<span class="text-3xl">🥈</span>';
            } else if (rank === 3) {
                barColor = "bg-orange-600"; // Barra Bronze
                medalIcon = '<span class="text-3xl">🥉</span>';
            }

            // O HTML abaixo usa `class` em vez de `className` e substitui componentes <Text> por <span>
            return `
                <div class="relative flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors h-20">
                    
                    <div class="absolute left-0 top-3 bottom-3 w-1.5 rounded-r ${barColor}"></div>

                    <div class="flex items-center gap-6 pl-4">
                        <div class="w-12 flex justify-center">
                            ${medalIcon}
                        </div>

                        <div class="flex flex-col">
                            <span class="font-semibold text-lg text-gray-800">${user.name}</span>
                            <span class="text-sm text-gray-500">${user.tasks} tarefas concluídas</span>
                        </div>
                    </div>

                    <div class="pr-6">
                        <span class="text-2xl font-bold text-indigo-900">
                            ${user.score.toFixed(1).replace('.', ',')}
                        </span>
                    </div>
                </div>
            `;
        }).join('');

        // Injeta o HTML final no container
        this.container.innerHTML = `
            <div class="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div class="flex flex-col py-2">
                    ${rankingItems}
                </div>
            </div>
        `;
    }
}