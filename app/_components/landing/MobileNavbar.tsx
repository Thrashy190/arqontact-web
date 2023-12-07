'use client'

import { Fragment } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCogs, faQuestion, faEnvelope, faHammer } from '@fortawesome/free-solid-svg-icons'

export default function MobileNavbar({ closeAction }: any) {
    return (
        <Fragment>
            <a onClick={() => closeAction()} href="#us" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><FontAwesomeIcon className="inline text-amber-400" icon={faUser}/></div>
                <span>Nosotros</span>
            </a>
            <a onClick={() => closeAction()} href="#how-it-works" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><FontAwesomeIcon className="inline text-amber-400" icon={faCogs}/></div>
                <span>Como funciona</span>
            </a>
            <a onClick={() => closeAction()} href="#faq" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><FontAwesomeIcon className="inline text-amber-400" icon={faQuestion}/></div>
                <span>Preguntas frecuentes</span>
            </a>
            <a onClick={() => closeAction()} href="#contact" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><FontAwesomeIcon className="inline text-amber-400" icon={faEnvelope}/></div>
                <span>Contacto</span>
            </a>
            <a onClick={() => closeAction()} href="#workers" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><FontAwesomeIcon className="inline text-amber-400" icon={faHammer}/></div>
                <span>Obreros</span>
            </a>
        </Fragment>
    )
}