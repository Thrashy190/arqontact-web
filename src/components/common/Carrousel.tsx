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
    loc?: string
}

function InteractiveTrigger({ children, event, field, id, self, loc = 'loc' }: InteractiveTriggerProps) {
    const ctx = useContext(CarrouselContext);

    let controlledChildren = Children.map(children, (el: React.ReactElement) => {
        return cloneElement(el, { [event]: () => { ctx.changeCurrentItem(id) }, [loc ?? 'loc']: ctx.currentItem, [field]: self != undefined ? ctx.currentItem === self : ctx.currentItem })
    })

    return controlledChildren;
}

interface PrevTrigger {
    className?: string
    children: JSX.Element | JSX.Element[]
}

function PrevTrigger({ children, className }: PrevTrigger) {
    const ctx = useContext(CarrouselContext);

    return ctx.currentItem != 0 ? <div onClick={() => { ctx.changeCurrentItem(ctx.currentItem-1) } } className={className}>
        { children }
    </div> : null;
}

interface NextTrigger {
    className?: string
    children: JSX.Element | JSX.Element[]
}

function NextTrigger({ children, className }: NextTrigger) {
    const ctx = useContext(CarrouselContext);

    return ctx.currentItem != (ctx.childCount - 1) ? <div onClick={() => { ctx.changeCurrentItem(ctx.currentItem+1) } } className={className}>
        { children }
    </div> : null;
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
    const [wasScroll, setWasScroll] = useState<boolean>(false);

    useEffect(() => {
        if (wasScroll) {
            setWasScroll(false);
            return;
        }

        carrousel.current.scrollLeft = (ctx.currentItem * (carrousel.current.scrollWidth / ctx.childCount));
    }, [ctx.currentItem])

    function handleScrollItems(e: any) {
        let item = Math.ceil(e.target.scrollLeft / (carrousel.current.scrollWidth / ctx.childCount));
        if (item != ctx.currentItem) {
            ctx.changeCurrentItem(item);
            setWasScroll(true);
        }
    }

    return (
        <div ref={carrousel} onScroll={handleScrollItems} className={`${className ?? ''} ${type == 'x' ? 'overflow-x-auto snap-x no-h-scrollbar' : 'overflow-y-auto snap-y no-v-scrollbar'} flex no-scrollbar snap-mandatory`}>
            { children }
        </div>
    )
}

export {
    Carrousel, Observer, InteractiveTrigger, Target, PrevTrigger, NextTrigger
}