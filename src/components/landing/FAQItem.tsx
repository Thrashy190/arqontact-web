import { useState } from "react";

interface Props {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: Props) {
  const [answerIsOpen, setAnswerIsOpen] = useState(false);
  return (
    <div onClick={() => setAnswerIsOpen(!answerIsOpen)} className={`cursor-pointer flex flex-col py-6 ${answerIsOpen ? 'space-y-4' : ''}`}>
      <div className='flex justify-between items-center'>
        <h3 className="font-semibold text-xl">{question}</h3>
        <button className={`duration-300 animation-ping transition-all outline-none focus:outline-none ${answerIsOpen ? '-rotate-180' : 'rotate-0'}`}>
          <i className="text-lg text-gray-500 fas fa-chevron-down"></i>
        </button>
      </div>
      <p className={`duration-300 animation-ping transition-all ${answerIsOpen ? 'h-auto' : ''} h-0 overflow-hidden`}>{answer}</p>
    </div>
  )
}