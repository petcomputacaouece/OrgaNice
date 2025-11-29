import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar, BttOptPerfil } from './index';

export function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popupProfileOpen, setPopupProfileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-bg">
            <Header onSidebarClick={() => setSidebarOpen(!sidebarOpen)}
                onProfileClick={() => setPopupProfileOpen(!popupProfileOpen)} />

            <main className="flex">

                <Sidebar isOpen={sidebarOpen} />

                <div className="flex-1 w-full">
                    <Outlet />
                </div>
            </main>
            <BttOptPerfil isOpen={popupProfileOpen} />
        </div>
    );
}