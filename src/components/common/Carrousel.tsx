import { useState, useRef } from "react";

interface Props {
    type?: string,
    children: JSX.Element | JSX.Element[]
}

export default function Carrousel({ type = 'x', children }: Props) {
    const carrousel = useRef<HTMLDivElement | null>(null);
    const [currentItem, setCurrentItem] = useState<number>(0);

    function handleScrollItems(e: any) {
        let item = Math.ceil(e.target.scrollLeft / e.target.offsetWidth);
        if (item != currentItem) {
            setCurrentItem(item);
        }
    }

    return (
        <div ref={carrousel} onScroll={handleScrollItems} className={`overflow-${type}-auto flex no-scrollbar snap-${type} snap-mandatory`}>
            { children }
        </div>
    )
}