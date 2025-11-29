import React from "react";

import imgMenu from "../assets/menu-aberto.png";
import imgAvatar from "../assets/GenericAvatar.png";

function Header({ onSidebarClick, onProfileClick }) {
    return (
        <header className="bg-gradient p-10 h-12 fixed top-0 left-0 w-full z-50 shadow-md">

            <button
                onClick={onSidebarClick}
                className="absolute top-1/2 -translate-y-1/2 left-4 hover:opacity-80 transition-opacity"
            >
                <img
                    src={imgMenu}
                    alt="Botão sidebar"
                    className="w-8 h-8 object-cover"
                />
            </button>

            <button
                onClick={onProfileClick}
                className="absolute top-1/2 -translate-y-1/2 right-4 hover:opacity-80 transition-opacity"
            >
                <img
                    src={imgAvatar}
                    alt="Botão do perfil"
                    className="w-10 h-10 object-cover rounded-full cursor-pointer border-2 border-white"
                />
            </button>

        </header>
    );
}

export default Header;