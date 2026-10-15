import React, { useRef, useState } from 'react';
import { Button, Header, PopUp, Section, Sidebar, Table, Typography } from '../ui/index';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { SiGooglemeet } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdLabel } from "react-icons/md";
import { BiSolidCheckboxMinus, BiSolidCheckboxChecked, BiCheckbox } from "react-icons/bi";

export function Calendario() {
    const calendarRef = useRef(null);
    const [mes, setMes] = useState(new Date().toLocaleDateString('pt-BR', {month: 'long',}));
    const [eventoAberto, setEventoAberto] = useState(false);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);
    const [statusAlunos, setStatusAlunos] = useState({'Marina Carvalho': 'falta', 'Beatriz Duarte': 'falta', 'Marcos Aurélio': 'falta', 'Lucas Levi': 'falta',});
    const [adicionarEvento, setAdicionarEvento] = useState(false);

    const mudarStatus = (nome) => {
        setStatusAlunos((anterior) => {
            const statusAtual = anterior[nome];
            const proximoStatus = {'': 'presente', presente: 'justificada', justificada: 'falta', falta: 'presente',};
            return {
                ...anterior,
                [nome]: proximoStatus[statusAtual],
            };
        });
    };

    const renderizarStatus = (nome) => {
        const status = statusAlunos[nome];
        if (status === 'presente') {
            return (
                <button onClick={() => mudarStatus(nome)} className="flex items-center gap-2 text-lg text-green-600">
                    <BiSolidCheckboxChecked className="text-[#6952b8] text-2xl"/>Presente
                </button>
            );
        }
        if (status === 'justificada') {
            return (
                <button onClick={() => mudarStatus(nome)} className="flex items-center gap-2 text-lg text-yellow-500">
                    <BiSolidCheckboxMinus className="text-[#6952b8] text-2xl"/>Falta justificada
                </button>
            );
        }
        if (status === 'falta') {
            return (
                <button onClick={() => mudarStatus(nome)} className="flex items-center gap-2 text-lg text-red-500">
                    <BiCheckbox className="text-gray-500 text-2xl"/>Falta
                </button>
            );
        }
        return (
            <button onClick={() => mudarStatus(nome)} className="flex items-center gap-2 text-lg text-gray-500">
                <BiCheckbox className="text-gray-500 text-2xl"/>
            </button>
        );
    };

    const [eventos, setEventos] = useState([
        {
            title: 'Reunião ADM',
            start: '2026-10-07',
            backgroundColor: '#b7e5e2',
            borderColor: '#b7e5e2',
        },
        {
            title: 'Visita Técnica',
            start: '2026-10-14',
            backgroundColor: '#ffe52b',
            borderColor: '#ffe52b',
        },
        {
            title: 'Férias',
            start: '2026-10-28',
            end: '2026-11-03',
            backgroundColor: '#efc0a8',
            borderColor: '#efc0a8',
        },
    ]);

    const [novoEvento, setNovoEvento] = useState({
        title: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        allDay: false,
        category: '',
        location: '',
        description: '',
        meetUrl: '',
    });

    const atualizarCampo = (campo, valor) => {
        setNovoEvento((anterior) => ({
            ...anterior,
            [campo]: valor,
        }));
    };

    const salvarEvento = (e) => {
        e.preventDefault();

        if (!novoEvento.title.trim() ||
            !novoEvento.startDate ||
            !novoEvento.endDate
        ) {
            alert('Preencha o título e as datas do evento.');
            return;
        }

        if (novoEvento.endDate < novoEvento.startDate) {
            alert('A data final precisa ser igual ou posterior à inicial.');
            return;
        }

        if (!novoEvento.allDay &&
            novoEvento.endDate === novoEvento.startDate &&
            novoEvento.endTime <= novoEvento.startTime
        ) {
            alert('O horário final precisa ser posterior ao inicial.');
            return;
        }

        const cores = {
            IntegraPET: '#cbd5f5',
            PETCursos: '#b7e5e2',
            VisitaTecnica: '#efc0a8',
            Outro: '#ffe52b',
        };

        const evento = {
            id: crypto.randomUUID(),
            title: novoEvento.title.trim(),
            allDay: novoEvento.allDay,
            start: novoEvento.allDay ? novoEvento.startDate : `${novoEvento.startDate}T${novoEvento.startTime}:00`,
            end: novoEvento.allDay ? (() => {
                const dataFinal = new Date(`${novoEvento.endDate}T12:00:00`);
                dataFinal.setDate(dataFinal.getDate() + 1);
                const ano = dataFinal.getFullYear();
                const mes = String(dataFinal.getMonth() + 1).padStart(2, '0');
                const dia = String(dataFinal.getDate()).padStart(2, '0');
                    return `${ano}-${mes}-${dia}`;
            })() : `${novoEvento.endDate}T${novoEvento.endTime}:00`,
            backgroundColor: cores[novoEvento.category] || '#cbd5f5',
            borderColor: cores[novoEvento.category] || '#cbd5f5',
            extendedProps: {category: novoEvento.category, location: novoEvento.location, description: novoEvento.description, meetUrl: novoEvento.meetUrl,},
        };

        setEventos((anteriores) => [...anteriores, evento]);

        setNovoEvento({
            title: '',
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
            allDay: false,
            category: '',
            location: '',
            description: '',
            meetUrl: '',
        });

        setAdicionarEvento(false);
    };

    const mudarMes = (direcao) => {
        const calendarApi = calendarRef.current.getApi();
        if (direcao === 'prev') {
            calendarApi.prev();
        } else {
            calendarApi.next();
        }
        setMes(calendarApi.getDate().toLocaleDateString('pt-BR', {month: 'long',}));
    };

    return (
        <div className="w-full">
            <main className="flex-1 p-8 mt-16 w-full">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-2xl mb-8">
                        Geral&nbsp; / &nbsp;Calendário
                    </div>
                    <div className="flex justify-center gap-12">
                        <div className="w-[56rem]">
                            <FullCalendar
                                ref={calendarRef}
                                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin,]}
                                initialView="dayGridMonth"
                                headerToolbar={false}
                                locale="pt-br"
                                firstDay={0}
                                fixedWeekCount={false}
                                showNonCurrentDates={true}
                                height="auto"
                                editable={true}
                                droppable={true}
                                selectable={true}
                                dayHeaderFormat={{weekday: 'narrow',}}
                                dayHeaderClassNames={(arg) => [
                                    '!text-[20px]',
                                    '!font-medium',
                                    '!bg-transparent',
                                    '!border-0',
                                    arg.date.getUTCDay() === 0 || arg.date.getUTCDay() === 6
                                        ? '!text-[#aaa]'
                                        : '!text-[#4964c8]',
                                ]}
                                viewClassNames={() => [
                                    '[&_.fc-scrollgrid]:!border-0',
                                    '[&_.fc-scrollgrid-section-header>th]:!border-0',
                                    '[&_.fc-scrollgrid-section-body>td]:!border-0',
                                    '[&_.fc-scrollgrid-section-sticky>*]:!bg-transparent',
                                    '[&_.fc-daygrid-body]:!border',
                                    '[&_.fc-daygrid-body]:!border-[#aaa]',
                                    '[&_.fc-daygrid-body]:!rounded-lg',
                                    '[&_.fc-daygrid-day-frame]:!min-h-[6.1rem]',
                                ]}                           
                                dayCellClassNames={(arg) => {
                                    const classes = [
                                        '!border-[#aaa]',
                                    ];
                                    if (arg.isToday) {
                                        classes.push('!bg-transparent');
                                    }
                                    if (arg.date.getMonth() !== 9) {
                                        classes.push('!text-[#aaa]');
                                    }
                                    return classes;
                                }}
                                dayCellContent={(arg) => (
                                    <div className="flex items-start">
                                        <span className={arg.isToday ? 'flex h-7 w-7 items-center justify-center rounded-full bg-[#4964c8] text-white font-semibold' : 'text-black'}>{arg.dayNumberText}</span>
                                    </div>
                                )}
                                events={eventos}
                                eventClassNames={() => ['!border-0', '!rounded-sm', '!text-black', 'text-[13px]','px-0.5']}
                                eventContent={(eventInfo) => (
                                    <div className="flex items-center gap-1 overflow-hidden whitespace-nowrap px-1">
                                        {!eventInfo.event.allDay && eventInfo.timeText && (
                                            <strong>{eventInfo.timeText}</strong>
                                        )}
                                        <span className="truncate">{eventInfo.event.title}</span>
                                    </div>
                                )}
                                eventClick={(info) => {
                                    setEventoSelecionado(info.event);
                                    setEventoAberto(true);
                                }}
                                eventDidMount={(info) => {
                                    const cor = info.event.backgroundColor || '#cbd5f5';
                                    info.el.style.setProperty('background-color', cor, 'important');
                                    info.el.style.setProperty('border-color', cor, 'important');
                                    const principal = info.el.querySelector('.fc-event-main');
                                    if (principal) {
                                        principal.style.setProperty('background-color', cor, 'important');
                                        principal.style.setProperty('color', '#111111', 'important');
                                    }
                                }}
                            />
                        </div>

                        <aside className="w-[185px]">
                            <div className="flex items-center justify-between mb-14">
                                <button onClick={() => mudarMes('prev')} className="text-[38px] leading-none text-gray-400 hover:text-gray-600">‹</button>
                                <h2 className="text-2xl font-semibold capitalize">{mes}</h2>
                                <button onClick={() => mudarMes('next')} className="text-[38px] leading-none text-gray-400 hover:text-gray-600">›</button>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-center mb-2">Lembretes do Mês</h3>
                                <div className="min-h-[312px] bg-[#c8d3f3] px-2 py-3">
                                    <div className="flex items-start gap-1.5 mb-4 text-base leading-tight">
                                        <span className="mt-1.5 shrink-0 w-3 h-3 rounded-full bg-[#4964c8]" />
                                        <span> Responder Relatório até 15/06</span>
                                    </div>
                                    <div className="flex items-start gap-1.5 text-base">
                                        <span className="mt-1.5 shrink-0 w-3 h-3 rounded-full bg-[#4964c8]" />
                                        <span>EtcEtc</span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => setAdicionarEvento(true)} className="mt-[57px] flex items-center gap-2 bg-gray-200 px-2 py-1 text-base hover:bg-gray-300 w-full">
                                <span className="text-3xl leading-none text-gray-500">+</span>Adicionar Evento</button>
                        </aside>

                        <PopUp isOpen={eventoAberto} onPopUpClick={() => setEventoAberto(false)} className="w-[800px] max-w-[90vw] min-h-[500px] !bg-[#f5f5f5] !px-6 !pt-0 !text-left !rounded-lg !border !border-[#888] shadow-none">
                            {eventoSelecionado && (
                                <div className="text-left text-[#111]">
                                    <p className="text-xl font-medium leading-7">
                                        {eventoSelecionado.start?.toLocaleDateString('pt-BR', {day: 'numeric', month: 'long',})}{' '}|{' '}
                                        {eventoSelecionado.start?.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit',})}
                                    </p>
                                    <h2 className="mt-2 border-b border-[#c5c5c5] pb-2 text-xl font-medium leading-6">{eventoSelecionado.title}</h2>
                                    <div className="mt-2 flex items-center gap-12 text-xl text-[#666]">
                                        <span>Frequência</span>
                                        <span>Etc</span>
                                        <span>Etc</span>
                                        <span>Etc</span>
                                    </div>
                                    <div className="mt-3 grid grid-cols-[minmax(0,1fr)_220px] gap-4">
                                        <div>
                                            <p className="text-xl">Nome</p>
                                            <div className="mt-2 space-y-1 text-lg leading-[1.65rem] text-[#595959]">
                                                <p>Marina Carvalho</p>
                                                <p>Beatriz Duarte</p>
                                                <p>Marcos Aurélio</p>
                                                <p>Lucas Levi</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xl">Status</p>
                                            <div className="mt-2 space-y-1">
                                                {renderizarStatus('Marina Carvalho')}
                                                {renderizarStatus('Beatriz Duarte')}
                                                {renderizarStatus('Marcos Aurélio')}
                                                {renderizarStatus('Lucas Levi')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </PopUp>

                        <PopUp isOpen={adicionarEvento}
                            onPopUpClick={() => setAdicionarEvento(false)}
                            className="w-[800px] max-w-[90vw] min-h-[500px] !bg-[#cbd5f5] !px-5 !pt-1 !text-left !rounded-none !border !border-[#888] !shadow-md"
                        >
                            <form onSubmit={salvarEvento} className="flex min-h-[435px] flex-col text-black">
                                <input type="text"
                                    value={novoEvento.title}
                                    onChange={(e) => atualizarCampo('title', e.target.value)}
                                    placeholder="Adicionar título do evento"
                                    required
                                    className="text-3xl mb-7 w-full border-0 border-b-2 border-[#4964c8] bg-transparent px-1 pb-1 outline-none placeholder:text-gray-500"
                                />

                                <div className="mb-7 flex items-center gap-3 text-lg">
                                    <FaRegClock className='ml-0.5 text-xl'/>
                                    <div className="flex flex-1 flex-wrap items-center gap-2 ml-0.5">
                                        <input type="date"
                                            value={novoEvento.startDate}
                                            onChange={(e) => {
                                                const data = e.target.value;
                                                setNovoEvento((anterior) => ({
                                                    ...anterior,
                                                    startDate: data,
                                                    endDate: !anterior.endDate || anterior.endDate < data ? data : anterior.endDate,
                                                }));
                                            }}
                                            required
                                            className="border border-[#4964c8] rounded p-1 bg-transparent text-base outline-none"
                                        />
                                        <span className="w-[22px] text-center">até</span>
                                        <input type="date"
                                            value={novoEvento.endDate}
                                            min={novoEvento.startDate || undefined}
                                            onChange={(e) => atualizarCampo('endDate', e.target.value)}
                                            required
                                            className="border border-[#4964c8] rounded p-1 bg-transparent text-base outline-none ml-1"
                                        />
                                        {!novoEvento.allDay && (
                                            <>
                                                <input type="time"
                                                    value={novoEvento.startTime}
                                                    onChange={(e) =>
                                                        atualizarCampo('startTime', e.target.value)
                                                    }
                                                    required
                                                    className="w-[85px] border border-[#4964c8] rounded p-1 bg-transparent text-base outline-none ml-2"
                                                />
                                                <span>-</span>
                                                <input type="time"
                                                    value={novoEvento.endTime}
                                                    onChange={(e) => atualizarCampo('endTime', e.target.value)}
                                                    required
                                                    className="w-[85px] border border-[#4964c8] rounded p-1 bg-transparent text-base outline-none"
                                                />
                                            </>
                                        )}
                                        
                                        <input type="checkbox"
                                            checked={novoEvento.allDay}
                                            onChange={(e) => atualizarCampo('allDay', e.target.checked)}
                                            className="h-4 w-4 accent-[#354c9b] ml-2"
                                        />Dia todo    
                                        </div>
                                    </div>

                                <label className="mb-7 flex items-center gap-3 text-lg">
                                    <MdLabel className='text-2xl'/>
                                    <select value={novoEvento.category}
                                        onChange={(e) => atualizarCampo('category', e.target.value)}
                                        className="flex-1 border-0 bg-transparent text-base outline-none"
                                    >
                                        <option value="Comunicação">IntegraPET</option>
                                        <option value="Acadêmico">PET Cursos</option>
                                        <option value="Pessoal">Visita Técnica</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </label>

                                <label className="mb-7 flex items-center gap-3 text-lg">
                                    <IoLocationSharp className='text-2xl'/>
                                    <input type="text"
                                        value={novoEvento.location}
                                        onChange={(e) => atualizarCampo('location', e.target.value)}
                                        placeholder="Adicionar local"
                                        className="flex-1 border-0 bg-transparent text-base outline-none placeholder:text-black"
                                    />
                                </label>

                                <label className="mb-7 flex items-center gap-3 text-lg">
                                    <SiGooglemeet className='ml-1 text-xl'/>
                                    <input type="url"
                                        value={novoEvento.meetUrl}
                                        onChange={(e) => atualizarCampo('meetUrl', e.target.value)}
                                        placeholder="Adicionar videoconferência do Meet"
                                        className="flex-1 border-0 bg-transparent text-base outline-none placeholder:text-black"
                                    />
                                </label>

                                <label className="mb-7 flex items-start gap-3 text-lg">
                                    <IoIosInformationCircleOutline className='text-2xl ml-0.5'/>
                                    <textarea value={novoEvento.description}
                                        onChange={(e) => atualizarCampo('description', e.target.value)}
                                        placeholder="Descrição"
                                        rows={1}
                                        className="flex-1 min-h-[100px] resize-none border border-[#4964c8] rounded bg-transparent text-base outline-none placeholder:text-black"
                                    />
                                </label>

                                <div className="mt-auto flex justify-end pt-2">
                                    <button type="submit" className="bg-[#354c9b] px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#293c7e]">Salvar</button>
                                </div>
                            </form>
                        </PopUp>

                    </div>
                </div>
            </main>
        </div>
    );
}