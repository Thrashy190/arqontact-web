import { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Carrousel, Observer, Target, PrevTrigger, NextTrigger } from "@components/common/Carrousel.tsx";
import GalleryLocation from "@components/profiles/GalleryLocation.tsx";

export default function Gallery({ totalChildren, children, controls }: { totalChildren: number, children: JSX.Element | JSX.Element[], controls?: boolean }) {
    return (
        <Carrousel totalChildren={totalChildren}>
            <div className='relative w-full h-full flex items-center'>
                {
                    controls ? <Fragment>
                        <PrevTrigger className="bg-[rgba(255,255,255,.5)] rounded-full absolute p-2 left-2">
                            <Icon icon="fa-solid:chevron-left" className="w-5 h-5 text-gray-800"/>
                        </PrevTrigger>
                        <NextTrigger className="bg-[rgba(255,255,255,.5)] rounded-full absolute p-2 right-2">
                            <Icon icon="fa-solid:chevron-right" className="w-5 h-5 text-gray-800"/>
                        </NextTrigger>
                    </Fragment> : null
                }
                <Target>
                    { children }
                </Target>
                <div className="bg-[rgba(0,0,0,.3)] w-full flex justify-center py-1 gap-1 bottom-0 left-0 absolute">
                    {
                        Array(totalChildren).fill(0).map((f, j) => {
                            return (
                                <Observer key={j} field="active" self={j}>
                                    <GalleryLocation />
                                </Observer>
                            )
                        })
                    }
                </div>
            </div>
        </Carrousel>
    )
}