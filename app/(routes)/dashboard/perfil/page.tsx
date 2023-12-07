'use client'

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { faBell, faColumns, faMap, faUserAlt, faSlidersH, faStar, faList, faChevronDown, faChevronLeft, faChevronRight, faBookmark, faShareAlt, faMessage, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Profile() {
    const router = useRouter();
    const carrousel = useRef<HTMLDivElement | null>(null);
    const panels = useRef<HTMLDivElement | null>(null);
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [itemWidth, setItemWidth] = useState<number>(300);
    const [currentPanel, setCurrentPanel] = useState<number>(0);

    function handleScrollItems(e: any) {
        let item = Math.ceil(e.target.scrollLeft / itemWidth);
        if (item != currentItem) {
            setCurrentItem(item);
        }
    }

    function handleScrollPanels(e: any) {
        let item = Math.ceil(e.target.scrollLeft / (panels.current?.offsetWidth ?? 0));
        if (item != currentPanel) {
            setCurrentPanel(item);
        }
    }

    function setItem(i: number) {
        let pnls = panels.current;
        let newCI = i;
        pnls?.scrollTo({ left: pnls.offsetWidth * newCI, behavior: 'smooth'});

        setCurrentPanel(newCI);
    }

    function next() {
        let carr = carrousel.current;
        let newCI = currentItem + 1;
        carr?.scrollTo({ left: itemWidth * newCI, behavior: 'smooth'});

        setCurrentItem(newCI);
    }

    function previous() {
        let carr = carrousel.current;
        let newCI = currentItem - 1;
        carr?.scrollTo({ left: itemWidth * newCI, behavior: 'smooth'});

        setCurrentItem(newCI);
    }

    return (
        <main className="fixed w-screen h-screen flex flex-col justify-between overflow-hidden">
            <header className="flex-shrink-0 bg-white flex flex-col gap-6 border-b border-gray-200 pt-5 px-5">
                <div className="flex justify-between">
                    <span onClick={() => router.back()} className='text-gray-600'>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </span>
                    <div className="flex gap-6 text-[#0088ff]">
                        <FontAwesomeIcon icon={faBookmark}/>
                        <FontAwesomeIcon icon={faShareAlt}/>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
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
                <div className="w-full flex">
                    <div className='flex justify-center flex-grow flex-shrink-0'>
                        <span onClick={() => setItem(0)} className={`flex flex-col justify-center text-sm ${currentPanel == 0 ? 'text-amber-400' : 'text-gray-400'} transition-all`}>
                            <FontAwesomeIcon icon={faUserAlt}/>
                            { currentPanel == 0 ? <motion.div layoutId='header-underline' className='w-8 h-[3px] mt-2 rounded-t-md bg-amber-400'></motion.div>
                             : <div className='w-8 h-[3px] bg-transparent mt-2'></div> }
                        </span>
                    </div>
                    <div className='flex justify-center flex-grow flex-shrink-0'>
                        <span onClick={() => setItem(1)} className={`flex flex-col justify-center text-sm ${currentPanel == 1 ? 'text-amber-400' : 'text-gray-400'} transition-all`}>
                            <FontAwesomeIcon icon={faMessage}/>
                            { currentPanel == 1 ? <motion.div layoutId='header-underline' className='w-8 h-[3px] mt-2 rounded-t-md bg-amber-400'></motion.div>
                             : <div className='w-8 h-[3px] bg-transparent mt-2'></div> }
                        </span>
                    </div>
                    <div className='flex justify-center flex-grow flex-shrink-0'>
                        <span onClick={() => setItem(2)} className={`flex flex-col justify-center text-sm ${currentPanel == 2 ? 'text-amber-400' : 'text-gray-400'} transition-all`}>
                            <FontAwesomeIcon icon={faBorderAll}/>
                            { currentPanel == 2 ? <motion.div layoutId='header-underline' className='w-8 h-[3px] mt-2 rounded-t-md bg-amber-400'></motion.div>
                             : <div className='w-8 h-[3px] bg-transparent mt-2'></div> }
                        </span>
                    </div>
                </div>
            </header>
            <div ref={panels} onScroll={handleScrollPanels} className='w-screen h-full bg-gray-100 flex overflow-x-auto no-scrollbar snap-x snap-mandatory'>
                <div className="snap-center flex-shrink-0 w-screen h-full p-5 flex flex-col gap-6">
                    <div className="flex flex-col gap-2 text-xs">
                        <h2 className='uppercase text-gray-500 font-semibold'>Contacto</h2>
                        <div className="bg-white rounded-lg flex flex-col divide-y divide-gray-100">
                            <div className="py-3 px-5 flex justify-between">
                                <span className='font-medium'>Teléfono:</span>
                                <div className="flex items-center gap-3">
                                    <span>4461117033</span>
                                    <span className='text-gray-500'>
                                        <FontAwesomeIcon icon={faUserAlt}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-xs">
                        <h2 className='uppercase text-gray-500 font-semibold'>Localización</h2>
                        <div className="bg-white rounded-lg flex flex-col divide-y divide-gray-100">
                            <div className="py-3 px-5 flex justify-between">
                                <span className='font-medium'>Residencia:</span>
                                <div className="flex items-center gap-3">
                                    <span>Querétaro, Querétaro</span>
                                </div>
                            </div>
                            <div className="py-3 px-5 flex justify-between">
                                <span className='font-medium'>Origen</span>
                                <div className="flex items-center gap-3">
                                    <span>Michoacán, Zamora</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-xs">
                        <h2 className='uppercase text-gray-500 font-semibold'>Habilidad</h2>
                        <div className="bg-white rounded-lg flex flex-col divide-y divide-gray-100">
                            <div className="py-3 px-5 flex justify-between">
                                <span className='font-medium'>Rol:</span>
                                <div className="flex items-center gap-3">
                                    <span>Constructor</span>
                                </div>
                            </div>
                            <div className="py-3 px-5 flex flex-col gap-2">
                                <span className='font-medium'>Puestos:</span>
                                <div className="flex gap-3">
                                <button className='flex-shrink-0 flex items-center bg-amber-100 text-amber-400 rounded-md px-4 py-1 gap-3'>
                                    <span>Bloquero</span>
                                </button>
                                <button className='flex-shrink-0 flex items-center bg-amber-100 text-amber-400 rounded-md px-4 py-1 gap-3'>
                                    <span>Bloquero</span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="snap-center flex-shrink-0 w-screen h-full flex flex-col justify-start no-scrollbar overflow-y-auto p-5">
                    <div className="flex flex-col gap-6">
                        {
                            Array(5).fill(0).map((e, i) => {
                                return (
                                    <div key={i} className="flex flex-col gap-2 text-xs">
                                        <div className="w-full flex justify-between">
                                            <div className="flex gap-3">
                                                <img className='w-4 h-4 flex-shrink-0 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8dkWYTLlEbqVU1TUU9O5VjeiV1Q5sx_qMwnOjq8HJcjP75uR3vf89Wl4YcQaVy0V63E&usqp=CAU" alt="profile" />
                                                <span className='font-semibold'>John Connor</span>
                                            </div>
                                            <span className='flex gap-3 text-amber-400'>
                                                <FontAwesomeIcon icon={faStar}/>
                                                <span>5/5</span>
                                            </span>
                                        </div>
                                        <div className="bg-white rounded-lg flex flex-col gap-4 py-3 px-5">
                                            <h3>Muy buen trabajo.</h3>
                                            <p className='text-gray-500'>La neta se anduvo rifando bien perro con los muros de block. Muy bien puestos, se los aventaba de volada, 100% recomendado</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="snap-center flex-shrink-0 w-screen h-full flex flex-col justify-start no-scrollbar overflow-y-auto p-5">
                    <div className="flex flex-col gap-6">
                        {
                            Array(1).fill(0).map((e, i) => {
                                return (
                                    <div key={i} className="bg-white flex flex-col items-center gap-3 py-4 px-2 rounded-md">
                                        <div className='relative w-[300px] h-[300px]'>
                                            <div ref={carrousel} onScroll={handleScrollItems} className="w-full h-full overflow-x-auto flex no-scrollbar snap-x snap-mandatory">
                                                <img className='snap-center object-cover object-center' src="https://assets.easybroker.com/property_images/2688782/42240426/EB-JH8782.jpeg" alt="gallery-item"/>
                                                <img className='snap-center object-cover object-center' src="https://assets.easybroker.com/property_images/2688782/42240512/EB-JH8782.JPG" alt="gallery-item" />
                                                <img className='snap-center object-cover object-center' src="https://assets.easybroker.com/property_images/2688782/42240509/EB-JH8782.JPG" alt="gallery-item" />
                                            </div>
                                            {/* {
                                                currentItem != 0 ? <div onClick={previous} className='w-10 h-10 bg-[rgba(255,255,255,.5)] rounded-full flex justify-center items-center absolute top-1/2 left-2'>
                                                    <FontAwesomeIcon icon={faChevronLeft}/>
                                                </div> : null
                                            }
                                            {
                                                currentItem != 2 ? <div onClick={next} className='w-10 h-10 bg-[rgba(255,255,255,.5)] rounded-full flex justify-center items-center absolute top-1/2 right-2'>
                                                    <FontAwesomeIcon icon={faChevronRight}/>
                                                </div> : null
                                            } */}
                                            <div className="bg-[rgba(0,0,0,.3)] w-full flex justify-center py-1 gap-1 bottom-0 left-0 absolute">
                                                {
                                                    Array(3).fill(0).map((f, j) => {
                                                        return (
                                                            <div key={j} className={`w-2 h-2 rounded-full ${j == currentItem ? 'bg-white' : 'bg-[rgba(255,255,255,.3)]'}`}></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className='w-[300px] text-sm flex gap-1'>
                                            <p className='line-clamp-1 break-words'>Ola demonio, esta es una casa muy chingona que está aquí en Querétaro. Ola demonio, esta es una casa muy chingona que está aquí en Querétaro. Ola demonio, esta es una casa muy chingona que está aquí en Querétaro.</p>
                                            <span className='font-medium'>más</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="bg-white flex flex-col p-2 rounded-md">
                            <img src="https://assets.easybroker.com/property_images/2688782/42240426/EB-JH8782.jpeg" alt="gallery"/>
                        </div> */}
                    </div>
                </div>
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