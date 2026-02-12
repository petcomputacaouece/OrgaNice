import React from "react";
import { TaskCard, Typography } from "../../ui";

const priorities = ["Alta", "Media", "Baixa"];

const columnColors = {
    Alta: "bg-red-50 border-t-4 border-red-500",
    Media: "bg-yellow-50 border-t-4 border-yellow-400",
    Baixa: "bg-green-50 border-t-4 border-green-500",
};

export function TaskBoardView({ tasks, onDelete }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-x-auto pb-4">
            {priorities.map((priority) => {
                const tasksInPriority = tasks.filter((t) => t.priority === priority);

                return (
                    <div
                        key={priority}
                        className={`rounded-lg p-4 min-w-[280px] h-fit ${columnColors[priority]} shadow-sm`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <Typography as="h3" variant="default" className="font-bold text-gray-700">
                                {priority}
                            </Typography>
                            <span className="bg-white px-2 py-0.5 rounded-full text-xs font-bold text-gray-500 shadow-sm">
                                {tasksInPriority.length}
                            </span>
                        </div>

                        <div className="flex flex-col gap-3">
                            {tasksInPriority.length > 0 ? (
                                tasksInPriority.map((task) => (
                                    <TaskCard key={task.id} task={task} onDelete={onDelete} />
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-lg">
                                    Nenhuma tarefa
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
