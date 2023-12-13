import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

interface FullScreenModalProps {
    title: string,
    children: JSX.Element | JSX.Element[]
}

export default function AllFilters({ title, children }: FullScreenModalProps) {
    const { setModal } = useModal(state => state);
    return (
        <div onClick={(e) => e.stopPropagation()} className={`w-full h-full bg-white p-5 flex flex-col justify-between gap-10 self-end`}>
            <div className="flex flex-col gap-10 overflow-y-auto mobile-scrollbar">
                <div onClick={() => setModal(null)} className="sticky top-0 bg-white flex items-center gap-4 text-gray-500">
                    <span className='text-xl'>
                        <Icon icon="fa6-solid:chevron-left" className="w-5 h-5"/>
                    </span>
                    <span className='text-2xl'>
                        { title }
                    </span>
                </div>
                { children }
            </div>
            <div className="flex gap-5">
                <button onClick={() => setModal(null)} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                <button onClick={() => setModal(null)} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
            </div>
        </div>
    )
}