export default class MembrosLogic {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.members = [
            { id: 1, name: "Lucas Levi", commission: "Infraestrutura", activities: "Pet Cursos/ Integra Pet", presence: "80%", absence: "20%" },
            { id: 2, name: "Luna", commission: "Financeiro", activities: "Mesa Redonda/ Visita Técnica", presence: "95%", absence: "5%" },
            { id: 3, name: "Vanessa", commission: "Secretaria", activities: "Pet Cursos/ Inova Code", presence: "95%", absence: "5%" },
            { id: 4, name: "Joao", commission: "Comunicação", activities: "Encontro Petiano/ Mesa Redonda", presence: "95%", absence: "5%" },
            { id: 5, name: "Rian", commission: "Infraestrutura", activities: "DevSystem e Tutoria", presence: "90%", absence: "10%" },
        ];
    }

    render(viewMode = 'list') {
        if (!this.container) return;
        viewMode === 'list' ? this.renderList() : this.renderCards();
    }

    renderList() {
        const rows = this.members.map(m => `
            <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors h-16">
                <td class="pl-6 py-4">
                    <div class="flex items-center gap-4">
                        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4f46e5&color=fff" 
                             class="w-10 h-10 rounded-full border border-gray-200" alt="${m.name}">
                        <span class="font-medium text-gray-800">${m.name}</span>
                    </div>
                </td>
                <td class="px-4 py-4 text-gray-700">${m.commission}</td>
                <td class="px-4 py-4 text-gray-700 text-sm">${m.activities}</td>
                <td class="px-4 py-4 font-bold text-gray-700">${m.presence}</td>
            </tr>
        `).join('');

        this.container.innerHTML = `
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-indigo-600 text-white text-sm">
                                <th class="pl-6 py-4 font-semibold">Membro</th>
                                <th class="px-4 py-4 font-semibold">Comissão</th>
                                <th class="px-4 py-4 font-semibold">Atividades</th>
                                <th class="px-4 py-4 font-semibold">Presença</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">${rows}</tbody>
                    </table>
                </div>
            </div>
        `;
    }

    renderCards() {
        const cards = this.members.map(m => `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div class="bg-indigo-600 h-24 flex justify-center items-center relative">
                    <div class="absolute -bottom-8 p-1 bg-white rounded-full">
                         <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4f46e5&color=fff&size=128" 
                             class="w-16 h-16 rounded-full border-2 border-white shadow-sm" alt="${m.name}">
                    </div>
                </div>
                <div class="pt-12 pb-6 px-6 flex flex-col gap-3 text-sm">
                    <div class="text-center font-bold text-lg text-gray-800 mb-2">${m.name}</div>
                    <div><span class="font-bold text-gray-800">Comissão:</span> <span class="text-gray-600">${m.commission}</span></div>
                    <div><span class="font-bold text-gray-800">Atividades:</span> <span class="text-gray-600">${m.activities}</span></div>
                    <div><span class="font-bold text-gray-800">Presença/Falta:</span> <span class="text-gray-600">${m.presence} / ${m.absence}</span></div>
                </div>
            </div>
        `).join('');

        this.container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>`;
    }
}