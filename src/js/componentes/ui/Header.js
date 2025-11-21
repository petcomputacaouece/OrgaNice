function Header({ onMenuClick }) {
    return (
        <header className="bg-gradient p-10 h-12 relative">
            <button
                onClick={onMenuClick}
                className="absolute top-1/2 -translate-y-1/2 left-4"
            >
                <img
                    src="../src/imgs/header/menu-aberto.png"
                    alt="Botão sidebar"
                    className="w-10 h-10 object-cover"
                />

            </button>
        </header>
    );
}
