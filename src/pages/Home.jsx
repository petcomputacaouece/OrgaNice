import React from "react";
import { Section, Typography } from '../ui';

export function Home() {
    return (
        <div className="w-full">

            <div className="mb-12 text-left pt-32 pl-24">
                <Typography as="span" variant="titulo" className="">
                    Geral / Inicio
                </Typography>
            </div>

            <div className="grid grid-cols-2 gap-x-80 px-12">
                <Section nameSection="Minhas Tarefas" className="text-center">
                </Section>

                <Section nameSection="Calendario" className="text-center" />

                <Section nameSection="Ranking de membros" className="text-center" />
            </div>
        </div>
    );
}