import { useState } from "react";
import AnimatedIf from "@components/common/AnimatedIf";
import MobileNavbar from "@components/landing/MobileNavbar";
import { Icon } from "@iconify/react";

export default function Navbar() {
    const [mNState, setMNState] = useState(false);
    return (
        <nav className="w-full z-[100] h-16 md:h-24 bg-white shadow-sm px-6 md:px-10 lg:px-28 sticky flex justify-between items-center top-0">
            <img
                className='inline w-auto h-8 md:h-10'
                src="/logo_light.svg"
                alt="logo"
            />
            <div className="hidden md:flex text-sm lg:text-base justify-start items-center gap-12 text-gray-800">
                <a href="#us" className="w-auto">Nosotros</a>
                <a href="#how-it-works" className="w-auto">Como funciona</a>
                <a href="#faq" className="w-auto">Preguntas frecuentes</a>
                <a href="#contact" className="w-auto">Contacto</a>
                <a href="#workers" className="w-auto">Obreros</a>
            </div>
            <button onClick={() => setMNState(!mNState)} className='relative w-8 h-8 focus:outline-none md:hidden flex justify-center items-center'>
                <AnimatedIf condition={!mNState} className='absolute'>
                    <Icon icon="fa-solid:bars" className="w-6 h-6 text-gray-800"></Icon>
                </AnimatedIf>
                <AnimatedIf condition={mNState} className='absolute'>
                    <Icon icon="fa-solid:times" className="w-6 h-6 text-gray-800"></Icon>
                </AnimatedIf>
            </button>
            <AnimatedIf condition={mNState} className='w-full rounded-b-2xl divide-y divide-gray-200 shadow-md -ml-6 fixed top-16 bg-white text-xl z-50 flex flex-col'>
                <MobileNavbar closeAction={() => setMNState(false)} />
            </AnimatedIf>
        </nav>
    )
}