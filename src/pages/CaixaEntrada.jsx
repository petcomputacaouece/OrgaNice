import { React, useState } from 'react';
import { Button, Header, PopUp, Section, Sidebar, Table, Typography } from '../ui/index';
import { examplesNotifications } from "/src/js/functions/Notifications.js"

export function CaixaEntrada() {

    const [notifications, setNotifications] = useState(
        Object.values(examplesNotifications)
    );

    function setNotsRead(id) {
        setNotifications(
            notifications.map((nots) => {
                if (nots.id == id) {
                    return {
                        ...nots, read: true
                    }
                }
                return nots;
            })
        )
    }

    return (
        <div className="w-full">

            <div className="mb-12 text-left pt-32 pl-24">
                <Typography as="span" variant="titulo" className="">
                    Caixa de Entrada
                </Typography>
            </div>


            <div className="mb-12 text-left pt-32 pl-24 ">
                <div>
                    <Typography as='span' variant='muted' className=''>
                        Dia 24 de setembro
                    </Typography>

                    <div>
                        <div className='grid mt-12'>
                            {notifications.map((nots) => (
                                <button key={nots.id} onClick={() => setNotsRead(nots.id)} className={`flex items-center gap-2 cursor-pointer border-b-2 pb-4 w-1/2 pt-4 ${nots.read ? "bg-bg-secondary" : ""}`} >
                                    <input type="checkbox" className="h-4 w-4 border accent-primary cursor-pointer ml-4" />
                                    <Typography as="span" variant="default" className="">
                                        {nots.message}
                                    </Typography>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}