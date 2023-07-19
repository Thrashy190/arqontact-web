"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function FAQItem(props: any) {
    const [answerIsOpen, setAnswerIsOpen] = useState(false);
    return (
        <div className={`flex flex-col py-6 ${answerIsOpen ? 'space-y-4' : ''}`}>
          <div className='flex justify-between items-center'>
            <h3 className="font-semibold text-xl">¿Cuál es el precio de los servicios?</h3>
            <button onClick={() => setAnswerIsOpen(!answerIsOpen)}><FontAwesomeIcon className="w-5 h-5 text-gray-500" icon={answerIsOpen ? faChevronUp : faChevronDown }/></button>
          </div>
          <p className={`${answerIsOpen ? 'h-auto' : ''} h-0 overflow-hidden`}>Nuestros servicios son gratuitos hasta cierto punto, solamente tendrás que pagar para acceder a algunas funcionalidades.</p>
        </div>
    )
}