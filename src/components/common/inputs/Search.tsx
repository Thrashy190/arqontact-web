import { Icon } from "@iconify/react";

interface InputProps {
    id: string,
    placeholder: string,
}

export default function Search({ id, placeholder }: InputProps) {
    return (
        <div className="w-full flex gap-4 items-center bg-gray-100 px-4 py-2 rounded-lg border-2 border-transparent focus-within:border-gray-300">
            <Icon icon="fa6-solid:magnifying-glass" className="w-4 h-4 text-gray-400" />
            <input
                name={ id }
                className="w-full bg-transparent focus:outline-none"
                type="text"
                placeholder={ placeholder }
            />
        </div>
    )
}