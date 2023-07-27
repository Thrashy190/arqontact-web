"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function FAQItem() {
    const [answerIsOpen, setAnswerIsOpen] = useState(false);
    return (
        <div onClick={() => setAnswerIsOpen(!answerIsOpen)}  className={`cursor-pointer flex flex-col py-6 ${answerIsOpen ? 'space-y-4' : ''}`}>
          <div className='flex justify-between items-center'>
            <h3 className="font-semibold text-xl">¿Cuál es el precio de los servicios?</h3>
            <button className={`duration-300 animation-ping transition-all outline-none focus:outline-none ${ answerIsOpen ? '-rotate-180' : 'rotate-0'  }`}>
              <FontAwesomeIcon size='lg' className="text-gray-500" icon={faChevronDown }/>
              </button>
          </div>
          <p className={`duration-300 animation-ping transition-all ${answerIsOpen ? 'h-auto' : ''} h-0 overflow-hidden`}>Nuestros servicios son gratuitos hasta cierto punto, solamente tendrás que pagar para acceder a algunas funcionalidades.</p>
        </div>
    )
}