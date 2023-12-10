import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import { useDashboard } from "@stores/dashboard.store";

export default function List() {
    const { mode, setMode, filters } = useDashboard(state => state);
    const listCarrousel = useRef<HTMLDivElement | null>(null);
    const list = useRef<HTMLDivElement | null>(null);
    const panel = useRef<HTMLDivElement | null>(null);
    const emptyCard = useRef<HTMLDivElement | null>(null);
    const [listHeight, setListHeight] = useState<number>(0);
    const [listIsFull, setListIsFull] = useState<boolean>(false);
    const [previousDifference, setPreviousDifference] = useState<number>(0);
    const [isAdjusting, setIsAdjusting] = useState<boolean>(false);

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
        <div className="w-screen relative">
            {
                mode == 'map' ? <div onClick={() => setListMode()} className="w-10 h-10 z-[15] bg-white flex justify-center items-center text-gray-400 absolute -top-8 right-5 border border-gray-200 rounded-md">
                    <Icon icon="fa6-solid:list"/>
                </div> : null
            }
            {
                listIsFull ? <div onClick={() => setMapMode()} className="w-10 h-10 z-[15] bg-white flex justify-center items-center text-gray-400 absolute right-5 bottom-5 border border-gray-200 rounded-md">
                    <Icon icon="fa6-solid:map"/>
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
                            Array(10).fill(null).map((e, index) => {
                                return <a onClick={() => setMode('')} key={index} href='/dashboard/profile'>
                                    <div className="flex items-center gap-4 py-6 px-3">
                                        <img className='w-20 h-20 flex-shrink-0 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8dkWYTLlEbqVU1TUU9O5VjeiV1Q5sx_qMwnOjq8HJcjP75uR3vf89Wl4YcQaVy0V63E&usqp=CAU" alt="profile" />
                                        <div className="w-full text-xs flex flex-col gap-2">
                                            <h2 className='text-sm font-medium'>Juan José Cruz Aguirre {index}</h2>
                                            <div className='w-auto self-start flex items-center bg-amber-100 text-amber-400 rounded-md px-2 py-1 gap-3'>
                                                <span>Bloquero</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Querétaro, QRO.</span>
                                                <div className='w-auto flex items-center bg-amber-100 text-amber-400 rounded-md px-2 py-1 gap-3'>
                                                    <span>4.5</span>
                                                    <Icon icon="fa6-solid:star"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
            {
                mode == 'map' ? <div className="relative bg-gray-100 flex overflow-x-auto mobile-scrollbar gap-5 p-5">
                    {
                        Array(10).fill(null).map((e, index) => {
                            return <a onClick={() => setMode('')} key={index} href='/dashboard/profile'>
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
                                                    <Icon icon="fa6-solid:star"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
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
    )
}