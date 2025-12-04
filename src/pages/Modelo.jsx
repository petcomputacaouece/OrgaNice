import React from 'react';
{/* essas sao todas as classes UI reutilizaveis, por padrao o arquivo ja herda a HEADER, SIDEBAR e  BTTOPTPERFIL, pois esta definido como layout padrao em Layout.JSX*/ }
import { Button, Header, PopUp, Section, Sidebar, Table, Typography } from '../ui/index';

export function Modelo() {
    return (
        <div className="w-full">
            {/* este sera o body da sua pagina */}
        </div>
    )
}