import { Icon } from "@iconify/react";
import { useEffect, useRef} from "react";
import { useModal } from "@stores/modal.store";
import { useDashboard } from "@stores/dashboard.store";

import { AllFilters, GradeFilters, OrderByFilters } from "./modals";

export default function Header() {
    const { setModal } = useModal(state => state);
    const { setFilters } = useDashboard(state => state);
    const filters = useRef<HTMLDivElement | null>();

    useEffect(() => {
        setFilters(filters);
    }, [])

    function setAllFiltersModal() {
        setModal(<AllFilters />);
    }

    function setGradeFiltersModal() {
        setModal(<GradeFilters />);
    }

    function setOrderByFiltersModal() {
        setModal(<OrderByFilters />);
    }

    return (
        <header ref={filters} className='z-20 flex-shrink-0 w-screen bg-white overflow-hidden border-b border-gray-200 flex items-center p-5 text-gray-500 gap-3'>
            <button onClick={() => setAllFiltersModal()} className='w-10 h-10 flex-shrink-0 flex justify-center items-center bg-gray-100 text-gray-400 rounded-full'>
                <Icon icon="fa6-solid:sliders"/>
            </button>
            <div className="flex text-sm overflow-x-auto no-scrollbar gap-3">
                <button className='flex-shrink-0 flex items-center bg-amber-100 text-amber-400 rounded-full px-4 py-1 gap-3'>
                    <span>Bloquero</span>
                </button>
                <button onClick={() => setGradeFiltersModal()} className='flex-shrink-0 flex items-center bg-gray-100 text-gray-400 rounded-full px-4 py-1 gap-3'>
                    <span>Ordenar por</span>
                    <Icon icon="fa6-solid:chevron-down"/>
                </button>
                <button onClick={() => setOrderByFiltersModal()} className='flex-shrink-0 flex items-center bg-gray-100 text-gray-400 rounded-full px-4 py-1 gap-3'>
                    <span>Calificación</span>
                    <Icon icon="fa6-solid:chevron-down"/>
                </button>
            </div>
        </header>
    )
}