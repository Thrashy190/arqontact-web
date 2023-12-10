interface Props {
    active?: boolean
}

export default function GalleryLocation({ active }: Props) {
    return (
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-white' : 'bg-[rgba(255,255,255,.3)]'}`}></div>
    )
}