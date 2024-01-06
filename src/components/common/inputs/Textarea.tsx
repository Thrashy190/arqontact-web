interface TextareaProps {
    id: string,
    label: string,
    placeholder: string,
}

export default function Textarea({ id, label, placeholder }: TextareaProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor={ id }>{ label }</label>
            <textarea
                name={ id }
                className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                placeholder={ placeholder }
            />
        </div>
    )
}