'use client'

import { useState, useRef } from 'react';
import Link from 'next/link';
import { faBell, faColumns, faMap, faUserAlt, faSlidersH, faStar, faList, faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
    const listCarrousel = useRef<HTMLDivElement | null>(null);
    const list = useRef<HTMLDivElement | null>(null);
    const filters = useRef<HTMLDivElement | null>(null);
    const panel = useRef<HTMLDivElement | null>(null);
    const emptyCard = useRef<HTMLDivElement | null>(null);
    const [mode, setMode] = useState<string>('');
    const [listHeight, setListHeight] = useState<number>(0);
    const [listIsFull, setListIsFull] = useState<boolean>(false);
    const [previousDifference, setPreviousDifference] = useState<number>(0);
    const [modal, setModal] = useState<string>('');

    const [isAdjusting, setIsAdjusting] = useState<boolean>(false);
    const [dummy, setDummy] = useState<any>(false);

    function setListMode() {
        setMode('list');
        setListHeight(196);
        let newElement = listCarrousel.current ?? { scrollTop: 0 };
        newElement.scrollTop = 196;
        setIsAdjusting(true);
    }

    function setMapMode() {
        let newElement = listCarrousel.current ?? { scrollTop: 0 };
        newElement.scrollTop = 0;
        setMode('map');
        setListIsFull(false);
    }

    function handlePanelScroll(e: any) {
        e.stopPropagation();

        if (isAdjusting) {
            setIsAdjusting(false);
            return;
        }

        if (mode == 'map') {
            setListIsFull(false);
            return;
        }

        const panelInfo = panel.current?.getBoundingClientRect();
        const elInfo = list.current?.getBoundingClientRect();
        const scrollPosition = e.target.scrollTop;

        const filtersBottom = filters.current?.getBoundingClientRect()?.bottom ?? 0;
        const infoTop = elInfo?.top ?? 0;

        if ((listCarrousel.current?.getBoundingClientRect().top ?? 0) - ((emptyCard.current?.getBoundingClientRect().bottom ?? 0)) < 0) {
            const newHeight = listHeight + (listCarrousel.current?.getBoundingClientRect().top ?? 0) - (emptyCard.current?.getBoundingClientRect().bottom ?? 0);

            if (newHeight <= 90) {
                setMode('');
                setListHeight(0);
                return;
            }

            setListHeight(newHeight);
            setListIsFull(false);
            return;
        }

        if (infoTop <= filtersBottom) {
            if (!listIsFull) {
                const newHeight = (panelInfo?.bottom ?? 0) - filtersBottom;
                if (newHeight <= 90) {
                    setListHeight(newHeight);
                }
            }
            setListIsFull(true);
            return;
        }

        const newListHeight = (elInfo?.height ?? 0) + (scrollPosition - previousDifference);

        setListHeight(newListHeight);
        setPreviousDifference(scrollPosition);
    }

    return (
        <main className="fixed w-screen h-screen flex flex-col justify-between overflow-hidden">
            <div onClick={() => setModal('')} className={`w-full h-full flex flex-col justify-end ${modal == '' ? 'top-full' : 'top-0'} bg-[rgba(0,0,0,.3)] z-30 absolute transition-all`}>
                <div className='h-auto flex flex-col justify-end' onClick={(e) => e.stopPropagation()}>
                    <div className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl ${modal == 'full' ? '' : 'hidden'}`}>
                        <div className="flex flex-col gap-10">
                            <div onClick={() => setModal('')} className="flex items-center px-5 gap-4 text-gray-500">
                                <span className='text-xl'>
                                    <FontAwesomeIcon icon={faChevronLeft}/>
                                </span>
                                <span className='text-2xl'>
                                    Filtros
                                </span>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col px-5 gap-5">
                                    <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                                        <span>Ordenar por</span>
                                    </div>
                                    <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                                        <div className="px-2 py-1 flex-grow flex justify-center">
                                            <span>Ascendente</span>
                                        </div>
                                        <div className="px-2 py-1 flex-grow flex justify-center">
                                            <span>Descendente</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col px-5 gap-5">
                                    <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                                        <span>Calificación</span>
                                        <span className='text-base font-normal text-gray-400'>· por lo menos</span>
                                    </div>
                                    <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                                        <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                            <span>
                                                Cualquiera
                                            </span>
                                        </div>
                                        <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                            <span className='text-xs'>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </span>
                                            <p>3.5</p>
                                        </div>
                                        <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                            <span className='text-xs'>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </span>
                                            <p>4.0</p>
                                        </div>
                                        <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                            <span className='text-xs'>
                                                <FontAwesomeIcon icon={faStar}/>
                                            </span>
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col px-5 gap-5">
                                    <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                                        <span>Puestos</span>
                                    </div>
                                    <div className="bg-white text-gray-600 flex flex-col rounded-lg divide-y divide-gray-200 border border-gray-200">
                                        <div className="w-full flex-shrink flex divide-x divide-gray-200">
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex-shrink flex divide-x divide-gray-200"> 
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                            <div className="flex flex-col text-xs justify-center items-center p-2">
                                                <span className='text-base'><FontAwesomeIcon icon={faBell}/></span>
                                                <span className='text-center'>Ola demonio</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 px-5">
                            <button onClick={() => setModal('')} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                            <button onClick={() => setModal('')} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
                        </div>
                    </div>
                    <div className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl ${modal == 'order' ? '' : 'hidden'}`}>
                        <div className="flex flex-col px-5 gap-5">
                            <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                                <span>Ordenar por</span>
                            </div>
                            <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                                <div className="px-2 py-1 flex-grow flex justify-center">
                                    <span>Ascendente</span>
                                </div>
                                <div className="px-2 py-1 flex-grow flex justify-center">
                                    <span>Descendente</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 px-5">
                            <button onClick={() => setModal('')} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                            <button onClick={() => setModal('')} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
                        </div>
                    </div>
                    <div className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl ${modal == 'grade' ? '' : 'hidden'}`}>
                        <div className="flex flex-col px-5 gap-5">
                            <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                                <span>Calificación</span>
                                <span className='text-base font-normal text-gray-400'>· por lo menos</span>
                            </div>
                            <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                                <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                    <span>
                                        Cualquiera
                                    </span>
                                </div>
                                <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                    <span className='text-xs'>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </span>
                                    <p>3.5</p>
                                </div>
                                <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                    <span className='text-xs'>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </span>
                                    <p>4.0</p>
                                </div>
                                <div className="px-2 py-1 flex-grow flex justify-center items-center gap-2">
                                    <span className='text-xs'>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </span>
                                    <p>4.5</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 px-5">
                            <button onClick={() => setModal('')} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                            <button onClick={() => setModal('')} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
            <header ref={filters} className='z-20 flex-shrink-0 w-screen bg-white overflow-hidden border-b border-gray-200 flex items-center p-5 text-gray-500 gap-3'>
                <button onClick={() => setModal('full')} className='w-10 h-10 flex-shrink-0 flex justify-center items-center bg-gray-100 text-gray-400 rounded-full'>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </button>
                <div className="flex text-sm overflow-x-auto no-scrollbar gap-3">
                    <button className='flex-shrink-0 flex items-center bg-amber-100 text-amber-400 rounded-full px-4 py-1 gap-3'>
                        <span>Bloquero</span>
                    </button>
                    <button onClick={() => setModal('order')} className='flex-shrink-0 flex items-center bg-gray-100 text-gray-400 rounded-full px-4 py-1 gap-3'>
                        <span>Ordenar por</span>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </button>
                    <button onClick={() => setModal('grade')} className='flex-shrink-0 flex items-center bg-gray-100 text-gray-400 rounded-full px-4 py-1 gap-3'>
                        <span>Calificación</span>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </button>
                </div>
            </header>
            <div className='w-screen h-full bg-gray-100'>
            </div>
            <div className="w-screen relative">
                {
                    mode == 'map' ? <div onClick={() => setListMode()} className="w-10 h-10 z-[15] bg-white flex justify-center items-center text-gray-400 absolute -top-8 right-5 border border-gray-200 rounded-md">
                        <FontAwesomeIcon icon={faList}/>
                    </div> : null
                }
                {
                    listIsFull ? <div onClick={() => setMapMode()} className="w-10 h-10 z-[15] bg-white flex justify-center items-center text-gray-400 absolute right-5 bottom-5 border border-gray-200 rounded-md">
                        <FontAwesomeIcon icon={faMap}/>
                    </div> : null
                }
                <div 
                    ref={panel}
                    className={`w-full absolute bg-white transform ${mode == 'list' ? '-translate-y-full' : 'translate-y-full'} transition-all`}
                >
                    <div ref={list} style={{ height: `${listHeight}px` }} className={`relative flex flex-col px-5 overflow-y-auto`}>
                        <div
                            ref={listCarrousel}
                            onScroll={handlePanelScroll}
                            className={`flex flex-col overflow-y-auto mobile-scrollbar divide-y divide-gray-200`}
                        >
                            <div
                                style={{ height: `${listHeight}px` }}
                                ref={emptyCard}
                                className={`w-full flex-shrink-0 bg-white border-none`}>
                            </div>
                            {
                                Array(10).fill(null).map((e, i) => {
                                    return <Link key={i} href="/dashboard/perfil">
                                        <div className="flex items-center gap-4 py-6 px-3">
                                            <img className='w-20 h-20 flex-shrink-0 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8dkWYTLlEbqVU1TUU9O5VjeiV1Q5sx_qMwnOjq8HJcjP75uR3vf89Wl4YcQaVy0V63E&usqp=CAU" alt="profile" />
                                            <div className="w-full text-xs flex flex-col gap-2">
                                                <h2 className='text-sm font-medium'>Juan José Cruz Aguirre {i}</h2>
                                                <div className='w-auto self-start flex items-center bg-amber-100 text-amber-400 rounded-md px-2 py-1 gap-3'>
                                                    <span>Bloquero</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Querétaro, QRO.</span>
                                                    <div className='w-auto flex items-center bg-amber-100 text-amber-400 rounded-md px-2 py-1 gap-3'>
                                                        <span>4.5</span>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    mode == 'map' ? <div className="relative bg-gray-100 flex overflow-x-auto mobile-scrollbar gap-5 p-5">
                        {
                            Array(10).fill(null).map((e, i) => {
                                return <Link key={i} href="/dashboard/perfil">
                                    <div className="w-[calc(100vw-4rem)] bg-white flex flex-shrink-0 items-center rounded-lg gap-4 py-6 px-3">
                                        <img className='w-20 h-20 flex-shrink-0 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8dkWYTLlEbqVU1TUU9O5VjeiV1Q5sx_qMwnOjq8HJcjP75uR3vf89Wl4YcQaVy0V63E&usqp=CAU" alt="profile" />
                                        <div className="w-full flex flex-col text-xs gap-2">
                                            <h2 className='text-sm font-medium'>Juan José Cruz Aguirre</h2>
                                            <div className='w-auto self-start flex items-center bg-amber-100 text-amber-400 rounded-md px-2 py-1 gap-3'>
                                                <span>Bloquero</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Querétaro, QRO.</span>
                                                <div className='w-auto flex items-center bg-amber-100 text-amber-400 rounded-md px-2 py-1 gap-3'>
                                                    <span>4.5</span>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }
                    </div> : null
                }
                {
                    mode == '' ? <div className='bg-white flex border-t border-gray-200'>
                        <button onClick={() => setListMode()} className='font-medium px-5 py-2 text-[#0088ff] uppercase underline'>Mostrar lista</button>
                    </div> : null
                }
            </div>
            <nav className="z-20 flex-shrink-0 w-screen bg-white flex justify-between p-5 text-gray-500 border-t border-gray-200">
                <span className='text-xl'>
                    <FontAwesomeIcon icon={faBell}/>
                </span>
                <span className='text-xl'>
                    <FontAwesomeIcon icon={faColumns}/>
                </span>
                <span className='text-xl'>
                    <FontAwesomeIcon icon={faMap}/>
                </span>
                <span className='text-xl'>
                    <FontAwesomeIcon icon={faUserAlt}/>
                </span>
            </nav>
        </main>
    )
}