import { Carrousel, InteractiveTrigger, Observer, Target } from "@components/common/Carrousel.tsx";
import ProfileLocation from "@components/profiles/ProfileLocation.tsx";
import { Fragment } from "react";

interface ProfileProps {
    children: any[],
    profileHeader: JSX.Element,
    profileInfo: JSX.Element,
    profileGalleries: JSX.Element,
}

export default function EditProfile({ profileHeader, profileInfo, profileGalleries }: ProfileProps) {
    return (
        <div className="self-center relative flex flex-col gap-5">
            <Carrousel totalChildren={2}>
                <header className="before:content-[''] before:w-full before:h-5 before:bg-white before:absolute before:-top-5 sticky top-0 flex flex-col gap-5 bg-white">
                    { profileHeader }
                    <div className="bg-gray-100 p-1 gap-2 text-gray-600 flex rounded-xl">
                        <InteractiveTrigger event="onClick" field="active" id={0} self={0}>
                            <ProfileLocation icon="fa6-solid:user"/>
                        </InteractiveTrigger>
                        <InteractiveTrigger event="onClick" field="active" id={1} self={1}>
                            <ProfileLocation icon="fa6-solid:border-all"/>
                        </InteractiveTrigger>
                    </div>
                </header>
                <Target className='w-full max-w-[700px] h-full bg-gray-100 sm:bg-white'>
                    { ...[profileInfo, profileGalleries] }
                </Target>
            </Carrousel>
        </div>
    )
}