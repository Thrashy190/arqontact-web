import { Fragment } from "react"

export default function MobileNavbar({ closeAction }: any) {
    return (
        <Fragment>
            <a onClick={() => closeAction()} href="#us" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><i className="inline text-amber-400 fas fa-user"/></div>
                <span>Nosotros</span>
            </a>
            <a onClick={() => closeAction()} href="#how-it-works" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><i className="inline text-amber-400 fas fa-cogs"/></div>
                <span>Como funciona</span>
            </a>
            <a onClick={() => closeAction()} href="#faq" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><i className="inline text-amber-400 fas fa-question"/></div>
                <span>Preguntas frecuentes</span>
            </a>
            <a onClick={() => closeAction()} href="#contact" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><i className="inline text-amber-400 fas fa-envelope"/></div>
                <span>Contacto</span>
            </a>
            <a onClick={() => closeAction()} href="#workers" className="transition-all w-auto hover:bg-gray-50 hover:text-amber-400 hover:font-medium py-4 flex items-center">
                <div className="w-10 mx-4"><i className="inline text-amber-400 fas fa-hammer"/></div>
                <span>Obreros</span>
            </a>
        </Fragment>
    )
}