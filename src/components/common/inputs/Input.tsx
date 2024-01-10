interface InputProps {
    id: string,
    label: string,
    type: string,
    placeholder: string,
}

export default function Input({ id, label, type, placeholder }: InputProps) {
    return (
        <div className="min-w-0 flex flex-col gap-1">
            <label className="font-medium" htmlFor={ id }>{ label }</label>
            <input
                name={ id }
                className="bg-gray-100 px-4 py-2 rounded-lg border-2 border-transparent focus-visible:border-gray-300 outline-none"
                type={ type }
                placeholder={ placeholder }
            />
        </div>
    )
}