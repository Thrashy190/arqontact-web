'use client'

import { Fragment } from "react"

export default function MobileNavbar({ closeAction }: any) {
    return (
        <Fragment>
            <a onClick={() => closeAction()} href="#us" className="w-auto py-4">Nosotros</a>
            <a onClick={() => closeAction()} href="#how-it-works" className="w-auto py-4">Como funciona</a>
            <a onClick={() => closeAction()} href="#faq" className="w-auto py-4">Preguntas frecuentes</a>
            <a onClick={() => closeAction()} href="#contact" className="w-auto py-4">Contacto</a>
        </Fragment>
    )
}