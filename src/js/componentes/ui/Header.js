function Header({ onSidebarClick, onProfileClick }) {
    return (
        <header className="bg-gradient p-10 h-12 fixed top-0 left-0 w-full z-50">
            <button
                onClick={onSidebarClick}
                className="absolute top-1/2 -translate-y-1/2 left-4"
            >
                <img
                    src="../imgs/header/menu-aberto.png"
                    alt="Botão sidebar"
                    className="w-10 h-10 object-cover"
                />
            </button>

            <button onClick={onProfileClick} className="absolute top-1/2 -translate-y-1/2 right-4">
                <img
                    src={avatarPerfil}
                    alt="Botão do perfil"
                    className="w-10 h-10 object-cover rounded-full cursor-pointer"
                />
            </button>

        </header>
    );
}

const avatarPerfil = "../imgs/header/Generic avatar.png";

const IconPerfil = (
    <svg class="humbleicons hi-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 17v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4ZM15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
)

const IconConfig = (
    <svg class="humbleicons hi-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10.47 4.32c.602-1.306 2.458-1.306 3.06 0l.218.473a1.684 1.684 0 0 0 2.112.875l.49-.18c1.348-.498 2.66.814 2.162 2.163l-.18.489a1.684 1.684 0 0 0 .875 2.112l.474.218c1.305.602 1.305 2.458 0 3.06l-.474.218a1.684 1.684 0 0 0-.875 2.112l.18.49c.498 1.348-.814 2.66-2.163 2.162l-.489-.18a1.684 1.684 0 0 0-2.112.875l-.218.473c-.602 1.306-2.458 1.306-3.06 0l-.218-.473a1.684 1.684 0 0 0-2.112-.875l-.49.18c-1.348.498-2.66-.814-2.163-2.163l.181-.489a1.684 1.684 0 0 0-.875-2.112l-.474-.218c-1.305-.602-1.305-2.458 0-3.06l.474-.218a1.684 1.684 0 0 0 .875-2.112l-.18-.49c-.498-1.348.814-2.66 2.163-2.163l.489.181a1.684 1.684 0 0 0 2.112-.875l.218-.474Z" /></svg>
)

const IconExit = (
    <svg class="humbleicons hi-logout" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3 3-3-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1" /></svg>
)

function BttOptPerfil({ isOpen }) {
    return (
        <aside className={`
                w-64 flex flex-col gap-4 pt-8 border border-bg-secondary rounded-xl shadow-sombra
                absolute right-4 top-24 bg-white z-50

                transition-all duration-200
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}>
            <div className="flex flex-col gap-4 border-b-2 p-4 w-64">
                <div className="flex items-center gap-2 cursor-pointer">
                    {IconPerfil}
                    <Text as="span" variant="default" className="pt-0.5"><a href="../public/perfil.html">Meu Perfil</a></Text>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    {IconConfig}
                    <Text as="span" variant="default" className="pt-0.5">Configurações</Text>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-4 w-64">
                <div className="flex items-center gap-2 cursor-pointer">
                    {IconExit}
                    <Text as="span" variant="default" className="pt-0.5">Sair</Text>
                </div>
            </div>

        </aside>
    );
}
