const IconHome = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-black"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9M6 10l6-6 6 6M6 10l-2 2m14-2 2 2m-10 1h4v4h-4v-4z"
        />
    </svg>
);

const IconInbox = (
    <svg class="humbleicons hi-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7m18 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m18 0-7.72 6.433a2 2 0 0 1-2.56 0L3 7" />
    </svg>
);

const IconMyTasks = (
    <svg class="humbleicons hi-clipboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 4H6a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3M9 3h6v4H9V3z" />
    </svg>
)

const IconMembers = (
    <svg class="humbleicons hi-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 13a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-1.5m-3-15.83a3 3 0 1 1 0 5.659M3 18v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm9-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

/* const IconRanking = (

) */

const IconCalendar = (
    <svg class="humbleicons hi-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g stroke="currentColor" stroke-width="2">
        <path stroke-linejoin="round" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4V6z" /><path stroke-linecap="round" d="M8 6.5v-3M16 6.5v-3" /><path stroke-linejoin="round" d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" /></g>
    </svg>
)

function SideBar() {
    return (
        <aside className="bg-bg-secondary w-64 h-[main] border-r-2 flex flex-col gap-4">

            <div className="flex flex-col gap-6 border-b-2 p-4 w-64">
                <div className="flex items-center gap-2 cursor-pointer">
                    {IconHome}
                    <Text as="p" variant="default">Home</Text>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    {IconInbox}
                    <Text as="p" variant="default">Caixa de Entrada</Text>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    {IconMyTasks}
                    <Text as="p" variant="default">Minhas Tarefas</Text>
                </div>
            </div>

            <div className="flex flex-col gap-6 border-b-2 p-4 w-64">
                <div className="flex items-center gap-2 cursor-pointer">
                    {IconMembers}
                    <Text as="p" variant="default">Membros</Text>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <Text as="p" variant="default">Ranking</Text>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    {IconCalendar}
                    <Text as="p" variant="default">Calendario</Text>
                </div>
            </div>



        </aside>
    );
}



