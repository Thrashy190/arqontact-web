import { Fragment } from "react";
import { Icon } from "@iconify/react";

export default function MobileNavbar({ closeAction }: any) {
    return (
        <Fragment>
            <a onClick={() => closeAction()} href="#us" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-4 mx-6"><Icon icon="fa-solid:user" className="inline text-amber-400"/></div>
                <span>Nosotros</span>
            </a>
            <a onClick={() => closeAction()} href="#how-it-works" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-4 mx-6"><Icon icon="fa-solid:cogs" className="inline text-amber-400"/></div>
                <span>Como funciona</span>
            </a>
            <a onClick={() => closeAction()} href="#faq" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-4 mx-6"><Icon icon="fa-solid:question" className="inline text-amber-400"/></div>
                <span>Preguntas frecuentes</span>
            </a>
            <a onClick={() => closeAction()} href="#contact" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-4 mx-6"><Icon icon="fa-solid:envelope" className="inline text-amber-400"/></div>
                <span>Contacto</span>
            </a>
            <a onClick={() => closeAction()} href="#workers" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-4 mx-6"><Icon icon="fa-solid:hammer" className="inline text-amber-400"/></div>
                <span>Obreros</span>
            </a>
        </Fragment>
    )
}