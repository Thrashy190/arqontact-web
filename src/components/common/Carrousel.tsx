import React, { useRef, useState, createContext, useContext, Children, cloneElement, useEffect } from 'react';

interface CTXType {
    childCount: number,
    currentItem: number,
    changeCurrentItem: (id: number) => void
}

const CarrouselContext = createContext<CTXType>({ childCount: 0, currentItem: null, changeCurrentItem: () => {}});

export default function Carrousel({ totalChildren, children }: { totalChildren: number, children: JSX.Element | JSX.Element[] }) {
    const [childCount, setChildCount] = useState<number>(totalChildren);
    const [currentItem, setCurrentItem] = useState<number>(0);

    return (
        <CarrouselContext.Provider value={{ childCount, currentItem, changeCurrentItem: (id: number) => { setCurrentItem(id) } } as CTXType}>
            { children }
        </CarrouselContext.Provider>
    )
}

interface InteractiveTriggerProps {
    children: JSX.Element | JSX.Element[]
    id: any
    event: string
    field: string
    self?: any
}

function InteractiveTrigger({ children, event, field, id, self }: InteractiveTriggerProps) {
    const ctx = useContext(CarrouselContext);

    let controlledChildren = Children.map(children, (el: React.ReactElement) => {
        return cloneElement(el, { [event]: () => { ctx.changeCurrentItem(id) }, [field]: self != undefined ? ctx.currentItem === self : ctx.currentItem })
    })

    return controlledChildren;
}

interface ObserverProps {
    children: JSX.Element | JSX.Element[]
    field: string
    self?: any
}

function Observer({ children, field, self }: ObserverProps) {
    const ctx = useContext(CarrouselContext);

    let controlledChildren = Children.map(children, (el: React.ReactElement) => {
        return cloneElement(el, { [field]: self != undefined ? ctx.currentItem === self : ctx.currentItem })
    })

    return controlledChildren;
}

interface CarrouselProps {
    type?: 'x' | 'y',
    children: JSX.Element | JSX.Element[],
    className?: string,
}

function Target({ type = 'x', children, className }: CarrouselProps) {
    const carrousel = useRef<HTMLDivElement | null>(null);
    const ctx = useContext(CarrouselContext);

    useEffect(() => {
        carrousel.current.scrollLeft = 0;
    }, [carrousel])

    useEffect(() => {
        carrousel.current.scrollLeft = (ctx.currentItem * (carrousel.current.scrollWidth / ctx.childCount));
    }, [ctx.currentItem])

    function handleScrollItems(e: any) {
        let item = Math.ceil(e.target.scrollLeft / (carrousel.current.scrollWidth / ctx.childCount));
        if (item != ctx.currentItem) {
            ctx.changeCurrentItem(item);
        }
    }

    return (
        <div ref={carrousel} onScroll={handleScrollItems} className={`${className ?? ''} overflow-${type}-auto flex no-scrollbar snap-${type} snap-mandatory`}>
            { children }
        </div>
    )
}

export {
    Carrousel, Observer, InteractiveTrigger, Target
}