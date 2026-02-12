import React, { useState } from "react";
import PopUp from "./PopUp";

export default function AddTaskModal({ isOpen, onClose, onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Media");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAdd({
            title,
            description,
            priority,
            status: "Pendente",
            date: new Date().toLocaleDateString("pt-BR", { day: '2-digit', month: 'short' })
        });

        // Reset form
        setTitle("");
        setDescription("");
        setPriority("Media");
        onClose();
    };

    return (
        <PopUp
            isOpen={isOpen}
            onPopUpClick={onClose}
            nameSection="Nova Tarefa"
            className="w-full max-w-md mx-auto"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-primary">
                        Título
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-primary"
                        placeholder="Ex: Atualizar documentação"
                        autoFocus
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-primary">
                        Descrição
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-primary resize-none h-24"
                        placeholder="Detalhes da tarefa..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-primary">
                        Prioridade
                    </label>
                    <div className="flex gap-2">
                        {["Alta", "Media", "Baixa"].map((p) => (
                            <button
                                key={p}
                                type="button"
                                onClick={() => setPriority(p)}
                                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border transition-all ${priority === p
                                    ? "bg-primary text-white border-primary shadow-sm"
                                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors font-primary"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={!title.trim()}
                        className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed font-primary"
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </PopUp>
    );
}

