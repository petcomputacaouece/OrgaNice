import React from "react";
import { Section, Typography, Button } from '../ui';

export function Perfil() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [popupProfileOpen, setPopupProfileOpen] = React.useState(false);
    const userPhoto = "./src/assets/userPhoto.png";
    const userName = "PET Computacao";
    const userHandle = "@petcomputacaouece"
    return (
        <div className="w-full">
            <div className="mb-12 text-left py-32 pl-24">
                <Typography as="span" variant="titulo" className="">
                    Geral / Meu Perfil
                </Typography>

                <div id="infosPerfil" className="flex gap-8 py-16">
                    <img src={userPhoto} alt="Foto do usuário" className="h-[100px]" />
                    <div className="flex flex-col py-4">
                        <Typography as="span" variant="default">{userName}</Typography>
                        <Typography as="span" variant="muted">{userHandle}</Typography>
                    </div>
                </div>
                <OptionsPerfil />
            </div>
        </div>
    );
}

function OptionsPerfil() {
    const [option, setOption] = React.useState("about");
    const groupsAsso = {
        atv1: { nameAtividade: "Infraestrutura", dateAtividade: "22/06/2025", typeGroup: "Comissao" },
        atv2: { nameAtividade: "Pet Cursos", dateAtividade: "22/06/2025", typeGroup: "Atividade" }
    }

    return (
        <>
            <div id="optionsPerfil" className="flex gap-36">
                <div className="relative">
                    <div className="absolute bottom-0 left-0 w-[150%] h-[4px] bg-gray-200"></div>
                    <div className="flex gap-24">
                        <button className={`text-2xl pl-8 border-b-4 leading-[3rem] px-12 relative z-10 ${option === "about" ? "text-primary  border-primary" : "text-text-secondary border-transparent"}`} onClick={() => setOption("about")}> Sobre </button>
                        <button className={`text-2xl pl-8 border-b-4 leading-[3rem] px-12 relative z-10 ${option === "groups" ? "text-primary border-primary" : "text-text-secondary border-transparent"}`} onClick={() => setOption("groups")}> Grupos </button>
                    </div>
                </div>
            </div>

            {
                option === "about" && (
                    <div id="infosAbout" className="flex flex-col pt-10">
                        <div className="h-64 rounded-lg">
                            <div className="flex flex-col">
                                <label className="text-xl text-[var(--text)] font-secondary font-[300]"> Nome de usuário: </label>
                                <input type="text" className="border border-text-secondary rounded px-2 py-1 mt-2 w-96" />
                            </div>

                            <div className="flex flex-col py-10">
                                <label className="text-xl text-[var(--text)] font-secondary font-[300]"> Email: </label>
                                <input type="text" className="border border-text-secondary rounded px-2 py-1 mt-2 w-96" />
                            </div>

                            <Button textButton="Salvar" className="w-32 h-12" />
                            <Typography as="span" variant="muted" className="underline cursor-pointer pl-10">Trocar minha senha</Typography>

                        </div>

                    </div>
                )
            }

            {
                option === "groups" && (


                    <div id="infosGroups" className="flex flex-col">
                        <Section className="bg-primary h-40 w-1/5">
                            <div className="flex justify-between px-6">
                                <Typography as="span" variant="titulo" className="text-white">{groupsAsso.atv1.nameAtividade}</Typography>
                                <Typography as="span" variant="muted" className="text-[#D3D3D3] pt-2">{groupsAsso.atv1.typeGroup}</Typography>
                            </div>

                            <Typography as="span" variant="muted" className="text-[#D3D3D3] text-left pl-6">Desde {groupsAsso.atv1.dateAtividade}</Typography>
                            <div className="relative pt-8 cursor-pointer">
                                <img src="./src/assets/opcaoSair.png" alt="sair" className="h-7  absolute right-20"></img>
                                <Typography as="span" variant="default" className="text-white absolute right-8">Sair</Typography>
                            </div>

                        </Section>


                        <Section nameSection="" className="bg-primary h-40 w-1/5" />

                    </div>
                )
            }

        </>
    );
}