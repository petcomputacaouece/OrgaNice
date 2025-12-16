import React from "react";
import { TaskCard, Typography } from "../../ui";

const priorities = ["Alta", "Media", "Baixa"];

export function TaskListView({ tasks, onDelete }) {
    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {priorities.map((priority) => {
                const tasksInPriority = tasks.filter((t) => t.priority === priority);
                if (tasksInPriority.length === 0) return null;

                return (
                    <div key={priority} className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 border-b pb-2 border-gray-200">
                            <Typography as="h3" variant="titulo" className="text-lg">
                                Prioridade {priority}
                            </Typography>
                            <span className="bg-gray-100 px-2.5 py-0.5 rounded-full text-xs font-bold text-gray-600">
                                {tasksInPriority.length}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {tasksInPriority.map((task) => (
                                <TaskCard key={task.id} task={task} onDelete={onDelete} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
