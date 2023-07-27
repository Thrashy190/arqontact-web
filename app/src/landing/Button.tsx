"use client";

interface Props {
    active?: boolean
    children?: JSX.Element|JSX.Element[]|string
    onClick?(): any
}

export default function Button({ active, children, onClick }: Props) {
    const elementAction = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button onClick={() => elementAction()} className={`${ active ? 'bg-amber-100 text-amber-400' : 'bg-white text-gray-800'} duration-300 transition-all text-base md:text-xl self-start font-medium px-4 py-1 rounded-md`}>
            { children }
        </button>
    )
}