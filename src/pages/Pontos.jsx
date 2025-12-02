import React from "react";
import { Section, Button, Typography, Table, PopUp } from "../ui";
import { addOccurrence, groupPet } from "/src/js/functions/Points.js";

export function Pontos() {
    const { useState, useRef } = React;
    const [popupButtonOpen, setPopupButtonOpen] = React.useState(false);
    const inputNamePetiano = React.useRef(null);
    const inputPointPetiano = React.useRef(null);
    const inputDescPetiano = React.useRef(null);
    const [occurrences, setOccurrences] = useState([]);

    return (
        <div className="w-full">
            <div className="mb-12 text-left py-32 pl-24">
                <Typography as="span" variant="titulo">Organizacao / Pontos</Typography>

                <div id="divSecoes" className="flex gap-32">

                    <div className="flex gap-24">
                        <Table title="Junho de 2025" columns={["Petiano", "Pontuação"]} nameSection="Pontuacao Geral" className="w-[700px]">
                            {
                                Object.values(groupPet).map((petiano, i) => (
                                    <tr key={i}>
                                        <td className="px-10 py-4 text-left w-full">{petiano.namePetiano}</td>
                                        <td className="px-10 py-4">{petiano.pontuacao}</td>
                                    </tr>
                                ))
                            }
                        </Table>
                        <Table title="Junho de 2025" columns={["Ocorrencia", "Valor"]} nameSection="Ocorrencias" className="w-[700px]">
                            {occurrences.map((occ, i) => (
                                <tr key={i}>
                                    <td className="px-10 py-4 text-left">{occ.resIptNamePetiano} - {occ.resIptDescPetiano}</td>
                                    <td className="px-10 py-4 text-left">{occ.points}</td>
                                </tr>
                            ))}
                        </Table>



                    </div>


                    <div className="grid absolute top-[90%] right-4">
                        <Button textButton="Adicionar Ocorrencia" onClick={() => setPopupButtonOpen(true)} />
                        <Typography as="span" variant="muted" className="text-base text-center">
                            Apenas para membros da Coordenacao
                        </Typography>
                    </div>
                    <PopUp isOpen={popupButtonOpen} onPopUpClick={() => setPopupButtonOpen(!popupButtonOpen)} nameSection="Adicionar Ocorrencia" className="w-128">
                        <div id="divInfos" className="pt-12 text-center grid gap-8">
                            <div className="grid text-center">
                                <label className="" > Nome </label>
                                <input type="text" ref={inputNamePetiano} className="border border-text-secondary rounded px-2 py-1 mt-2 w-96 mx-auto" />
                            </div>

                            <div className="grid text-center">
                                <label className=""> Descricao </label>
                                <input type="text" ref={inputDescPetiano} className="border border-text-secondary rounded px-2 py-1 mt-2 w-96 h-12 mx-auto" />
                            </div>

                            <div className="grid text-center">
                                <label className=""> Pontos </label>
                                <input type="number" ref={inputPointPetiano} className="border border-text-secondary rounded px-2 py-1 mt-2 w-16 mx-auto" />
                            </div>



                            <Button textButton="Adicionar" onClick={() => addOccurrence(inputNamePetiano.current.value, inputPointPetiano.current.value, inputDescPetiano.current.value, setOccurrences)} />

                        </div>
                    </PopUp>
                </div>
            </div>
        </div>
    )
}