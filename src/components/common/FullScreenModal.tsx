import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

interface FullScreenModalProps {
    id: string,
    title: string,
    children: JSX.Element | JSX.Element[]
}

export default function FullScreenModal({ id, title, children }: FullScreenModalProps) {
    const { removeModal } = useModal(state => state);
    return (
        <div id={id} onClick={(e) => e.stopPropagation()} className={`transform translate-y-full transition-all z-50 absolute w-full h-full bg-white p-5 flex flex-col justify-between gap-10 self-end`}>
            <div className="flex flex-col gap-10 overflow-y-auto mobile-scrollbar">
                <div className="sticky top-0 py-3 bg-white flex items-center gap-10 text-gray-400">
                    <span onClick={() => removeModal()} className='text-xl'>
                        <Icon icon="fa6-solid:chevron-left" className="w-5 h-5"/>
                    </span>
                    <span className='font-bold text-xl text-gray-800'>
                        { title }
                    </span>
                </div>
                { children }
            </div>
            <div className="flex gap-5">
                <button onClick={() => removeModal()} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                <button onClick={() => removeModal()} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
            </div>
        </div>
    )
}