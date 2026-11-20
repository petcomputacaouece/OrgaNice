import { useState } from 'react';
import {Button, Header, PopUp, Section, Sidebar, Table, Typography} from '../ui/index';

import {datasNots, examplesNotifications} from '/src/js/functions/Notifications.js';

export function CaixaEntrada() {

    const [notifications, setNotifications] = useState(
        Object.values(examplesNotifications)
    );

    const dates = [...datasNots].sort(
        (a, b) => b.date - a.date
    );


    function setNotsRead(id) {
        setNotifications(
            notifications.map((nots) => {
                if (nots.id === id) {
                    return {
                        ...nots,
                        read: true
                    };
                }

                return nots;
            })
        );
    }

    return (
        <div className="w-full">

            <div className="text-left pt-32 pl-24">
                <Typography as="span" variant="titulo">
                    Caixa de Entrada
                </Typography>
            </div>

            <div className="mb-12 text-left pt-16 pl-24">
                {dates.map((date) => {
                    const notificationsOfDay = notifications
                        .filter(
                            (nots) =>
                                nots.data.getTime() === date.date.getTime()
                        )
                        .sort((a, b) => b.data - a.data);

                    return (
                        <div key={date.id}>
                            <Typography as="span" variant="muted">
                                {date.date.toLocaleDateString('pt-BR', {
                                    day: 'numeric',
                                    month: 'long',
                                })}
                            </Typography>

                            <div className="grid mt-12">
                                {notificationsOfDay.map((nots) => (
                                    <button key={nots.id} onClick={() => setNotsRead(nots.id)} className={`flex items-center gap-2 cursor-pointer border-b-2 pb-4 w-1/2 pt-4 mb-12 ${nots.read ? 'bg-bg-secondary' : ''}`}>
                                        <input type="checkbox" className="h-4 w-4 border accent-primary cursor-pointer ml-4" />
                                        <Typography as="span" variant="default">
                                            {nots.message}
                                        </Typography>
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
