import { useEffect, useRef} from "react";
import { useModal } from "@stores/modal.store";
import { useDashboard } from "@stores/dashboard.store";

export default function Header() {
    const { setModal } = useModal(state => state);
    const { setFilters } = useDashboard(state => state);
    const filters = useRef<HTMLDivElement | null>();

    useEffect(() => {
        setFilters(filters);
    }, [])

    return (
        <header ref={filters} className='z-20 flex-shrink-0 w-screen bg-white overflow-hidden border-b border-gray-200 flex items-center p-5 text-gray-500 gap-3'>
            <button onClick={() => setModal('full')} className='w-10 h-10 flex-shrink-0 flex justify-center items-center bg-gray-100 text-gray-400 rounded-full'>
                <i className="fas fa-sliders-h"/>
            </button>
            <div className="flex text-sm overflow-x-auto no-scrollbar gap-3">
                <button className='flex-shrink-0 flex items-center bg-amber-100 text-amber-400 rounded-full px-4 py-1 gap-3'>
                    <span>Bloquero</span>
                </button>
                <button onClick={() => setModal('order')} className='flex-shrink-0 flex items-center bg-gray-100 text-gray-400 rounded-full px-4 py-1 gap-3'>
                    <span>Ordenar por</span>
                    <i className="fas fa-chevron-down"/>
                </button>
                <button onClick={() => setModal('grade')} className='flex-shrink-0 flex items-center bg-gray-100 text-gray-400 rounded-full px-4 py-1 gap-3'>
                    <span>Calificación</span>
                    <i className="fas fa-chevron-down"/>
                </button>
            </div>
        </header>
    )
}