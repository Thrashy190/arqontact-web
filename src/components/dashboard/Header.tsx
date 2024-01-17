import { useEffect, useRef } from "react";
import { useDashboard } from "@stores/dashboard.store";

interface HeaderProps {
    children: JSX.Element | JSX.Element[],
}

export default function Header({ children }: HeaderProps) {
    const { setFilters } = useDashboard(state => state);
    const filters = useRef<HTMLDivElement | null>();

    useEffect(() => {
        setFilters(filters);
    }, [])

    return (
        <header ref={filters} className='z-20 sm:shadow-md flex-shrink-0 w-screen sm:w-full bg-white border-b border-gray-200 flex sm:flex-col p-5 gap-3'>
            { children }
        </header>
    )
}