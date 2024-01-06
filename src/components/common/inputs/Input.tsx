interface InputProps {
    id: string,
    label: string,
    type: string,
    placeholder: string,
}

export default function Input({ id, label, type, placeholder }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor={ id }>{ label }</label>
            <input
                name={ id }
                className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                type={ type }
                placeholder={ placeholder }
            />
        </div>
    )
}