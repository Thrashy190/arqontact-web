import { Carrousel, Observer, Target } from "@components/common/Carrousel.tsx";
import GalleryLocation from "@components/profiles/GalleryLocation.tsx";

export default function Gallery({ totalChildren, children }: { totalChildren: number, children: JSX.Element | JSX.Element[] }) {
    return (
        <Carrousel totalChildren={totalChildren}>
            <div className='relative w-full h-full'>
                <Target>
                    { children }
                </Target>
                {/* {
                    currentItem != 0 ? <div onClick={previous} className='w-10 h-10 bg-[rgba(255,255,255,.5)] rounded-full flex justify-center items-center absolute top-1/2 left-2'>
                        <Icon icon="fas faChevronLeft"/>
                    </div> : null
                }
                {
                    currentItem != 2 ? <div onClick={next} className='w-10 h-10 bg-[rgba(255,255,255,.5)] rounded-full flex justify-center items-center absolute top-1/2 right-2'>
                        <Icon icon="fas faChevronRight"/>
                    </div> : null
                } */}
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