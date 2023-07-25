"use client"

interface Props {
  active?: boolean
  description: string
  icon: any
  onClick(): any
}

export default function LandingIconText({ active, icon, description, onClick }: Props) {
  return (
    <div className="xs:w-96 p-4 xs:p-8 space-y-10 flex flex-col justify-center items-center">
      <button onClick={() => onClick()} className={`${ active ? 'md:border-4 border-amber-400' : ''} transition-all hover:scale-110 w-20 h-20 flex justify-center items-center text-amber-400 rounded-full shadow-md`}>
        { icon }
      </button>
      <p className='text-center w-full text-2xl'>{ description }</p>
    </div>
  )
}