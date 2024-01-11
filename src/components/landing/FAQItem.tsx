import { useState } from "react";
import { Icon } from "@iconify/react";

interface Props {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: Props) {
  const [answerIsOpen, setAnswerIsOpen] = useState(false);
  return (
    <div className={`cursor-pointer flex flex-col py-6 ${answerIsOpen ? 'space-y-4' : ''}`}>
      <div onClick={() => setAnswerIsOpen(!answerIsOpen)}  className='flex justify-between items-center gap-3'>
        <h3 className="font-semibold text-xl">{question}</h3>
        <button className={`duration-300 animation-ping transition-all outline-none focus:outline-none ${answerIsOpen ? '-rotate-180' : 'rotate-0'}`}>
          <Icon icon="fa6-solid:chevron-down"/>
        </button>
      </div>
      <p className={`duration-300 animation-ping transition-all ${answerIsOpen ? 'h-auto' : ''} h-0 overflow-hidden`}>{answer}</p>
    </div>
  )
}