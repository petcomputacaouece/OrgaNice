import React, { useState } from "react";
import { Typography, AddTaskModal } from "../ui";
import { TaskListView } from "../ui/kanban/TaskListView";
import { TaskBoardView } from "../ui/kanban/TaskBoardView";

const INITIAL_TASKS = [
    { id: 1, title: "Atualizar Documentacao", description: "Revisar docs da API e atualizar endpoints depreciados.", priority: "Alta", date: "12 Dez", status: "Pendente" },
    { id: 2, title: "Corrigir bugs de CSS", description: "Ajustar margens no mobile e cores do dark mode.", priority: "Media", date: "13 Dez", status: "Em progresso" },
    { id: 3, title: "Planejar Sprint", description: "Definir tarefas para o proximo ciclo de desenvolvimento.", priority: "Alta", date: "14 Dez", status: "Pendente" },
    { id: 4, title: "Limpeza de codigo", description: "Remover console.logs e comentarios desnecessarios.", priority: "Baixa", date: "15 Dez", status: "Concluido" },
    { id: 5, title: "Reuniao com Design", description: "Alinhar novos prototipos da home page.", priority: "Media", date: "12 Dez", status: "Agendado" },
    { id: 6, title: "Atualizar Bibliotecas", description: "Rodar npm update para patch de seguranca.", priority: "Baixa", date: "20 Dez", status: "Pendente" },
    { id: 7, title: "Refatorar Login", description: "Melhorar validacao de senha.", priority: "Alta", date: "12 Dez", status: "Pendente" },
];

export function Tarefas() {
    const [viewMode, setViewMode] = useState("list"); // 'list' or 'board'
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now() }]);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="w-full min-h-screen bg-bg p-8 pt-24 pl-24 font-primary">
            <div className="flex justify-between items-center mb-8 pr-12">
                <div className="flex items-center gap-4">
                    <Typography as="h1" variant="titulo">
                        Minhas Tarefas
                    </Typography>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full shadow-md transition-all flex items-center justify-center group"
                        title="Adicionar Tarefa"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>

                <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                    <button
                        onClick={() => setViewMode("list")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors font-primary ${viewMode === "list"
                            ? "bg-primary text-white shadow-sm"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                    >
                        Lista
                    </button>
                    <button
                        onClick={() => setViewMode("board")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors font-primary ${viewMode === "board"
                            ? "bg-primary text-white shadow-sm"
                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                    >
                        Quadro
                    </button>
                </div>
            </div>

            <div className="pr-12">
                {viewMode === "list" ? (
                    <TaskListView tasks={tasks} onDelete={handleDeleteTask} />
                ) : (
                    <TaskBoardView tasks={tasks} onDelete={handleDeleteTask} />
                )}
            </div>

            <AddTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddTask}
            />
        </div>
    );
}
