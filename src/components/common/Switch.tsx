import React, { useState, createContext, useContext, Children, cloneElement } from 'react';

interface SwProps {
    children: JSX.Element|JSX.Element[]
    target: any
}

interface CTXType {
    tgt: any,
    changeTarget(id: any): any
}

const SwitchContext = createContext<CTXType>({ tgt: null, changeTarget: () => {}});

function Switch({ children, target }: SwProps) {
    const [tgt, setTgt] = useState(target);

    return (
        <SwitchContext.Provider value={{ tgt, changeTarget: (id: any) => { setTgt(id) } } as CTXType}>
            { children }
        </SwitchContext.Provider>
    )
}

interface TriggerProps {
    children: JSX.Element|JSX.Element[]
    id: any
    event: string
}

function Trigger({ children, id, event }: TriggerProps) {
    const swCTX = useContext(SwitchContext);

    let controlledChildren = Children.map(children, (el: React.ReactElement) => {
        return cloneElement(el, { [event]: () => { swCTX.changeTarget(id) } })
    })

    return controlledChildren;
}


interface TargetProps {
    children: JSX.Element|JSX.Element[]
    field: string
    self?: any
}

function Target({ children, field, self }: TargetProps) {
    const swCTX = useContext(SwitchContext);

    let controlledChildren = Children.map(children, (el: React.ReactElement) => {
        return cloneElement(el, { [field]: swCTX.tgt, [field]: self != undefined ? swCTX.tgt === self : swCTX.tgt })
    })

    return controlledChildren;
}

interface InteractiveTriggerProps {
    children: JSX.Element|JSX.Element[]
    id: any
    event: string
    field: string
    self?: any
}

function InteractiveTrigger({ children, event, field, id, self }: InteractiveTriggerProps) {
    const swCTX = useContext(SwitchContext);

    let controlledChildren = Children.map(children, (el: React.ReactElement) => {
        return cloneElement(el, { [event]: () => { swCTX.changeTarget(id) }, [field]: self != undefined ? swCTX.tgt === self : swCTX.tgt })
    })

    return controlledChildren;
}

export {
    Switch, Trigger, Target, InteractiveTrigger
}