'use client';

import Image from 'next/image'
import { AnimatedIf } from '../helpers';
import { MobileNavbar } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Navbar() {
    const [mNState, setMNState] = useState(false);
    return (
        <nav className="w-full z-[100] h-24 bg-white shadow-sm px-6 md:px-10 lg:px-28 sticky flex justify-between items-center top-0">
            <Image
                className='inline'
                src="/logo_light.svg"
                width={210}
                height={40}
                alt="logo"
            />
            <div className="hidden md:flex text-md lg:text-lg justify-start items-center gap-12 text-gray-800">
                <a href="#us" className="w-auto">Nosotros</a>
                <a href="#how-it-works" className="w-auto">Como funciona</a>
                <a href="#faq" className="w-auto">Preguntas frecuentes</a>
                <a href="#contact" className="w-auto">Contacto</a>
            </div>
            <button onClick={() => setMNState(!mNState)} className='relative w-8 h-8 focus:outline-none md:hidden flex'>
                <AnimatedIf condition={!mNState} className='absolute'>
                    <FontAwesomeIcon size='2x' className="text-gray-800" icon={faBars} />
                </AnimatedIf>
                <AnimatedIf condition={mNState} className='absolute'>
                    <FontAwesomeIcon size='2x' className="text-gray-800" icon={faTimes} />
                </AnimatedIf>
            </button>
            <AnimatedIf condition={mNState} className='w-full rounded-b-2xl divide-y divide-gray-200 shadow-md -ml-6 px-6 fixed top-24 bg-white text-xl z-50 flex flex-col'>
                <MobileNavbar closeAction={() => setMNState(false)}/>
            </AnimatedIf>
        </nav>
    )
}