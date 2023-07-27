"use client"

import { useRef } from 'react'
import { useScroll } from 'framer-motion'

interface Props {
  active?: boolean
  description: string
  icon: any
  onClick(): any
}

export default function LandingIconText({ active, icon, description, onClick }: Props) {
  const targetElement = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetElement,
  })

  scrollYProgress.on('change', () => {
    const p = window.innerHeight >= 950 ? .6 : .7;
    if (window.innerWidth <= 1250) {
      if (scrollYProgress.get() < p) {
        onClick();
      }
    }
  })

  return (
    <div className="xs:w-96 p-4 xs:p-8 space-y-10 flex flex-col justify-center items-center">
      <button ref={targetElement} onClick={() => onClick()} className={`${ active ? 'md:border-4 border-amber-400' : ''} transition-all hover:scale-110 w-20 h-20 flex justify-center items-center text-amber-400 rounded-full shadow-md`}>
        { icon }
      </button>
      <p className='text-center w-full text-xl lg:text-2xl'>{ description }</p>
    </div>
  )
}