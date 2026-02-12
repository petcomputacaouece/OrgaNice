import React from "react";
import { Typography } from ".";

export function TaskCard({ task, onDelete }) {
    const priorityColors = {
        Alta: "bg-red-100 text-red-800 border-red-200",
        Media: "bg-yellow-100 text-yellow-800 border-yellow-200",
        Baixa: "bg-green-100 text-green-800 border-green-200",
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group relative">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
                    className="p-1 hover:bg-red-50 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                    title="Excluir"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
            <div className="flex justify-between items-start mb-2">
                <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full border ${priorityColors[task.priority] || "bg-gray-100 text-gray-800"
                        }`}
                >
                    {task.priority}
                </span>
                <span className="text-xs text-text-secondary">{task.date}</span>
            </div>
            <Typography as="h4" variant="default" className="font-semibold text-text mb-1">
                {task.title}
            </Typography>
            <Typography as="p" variant="small" className="text-text-secondary line-clamp-2">
                {task.description}
            </Typography>
        </div>
    );
}
