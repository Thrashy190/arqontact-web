import { Carrousel, InteractiveTrigger, Observer, Target } from "@components/common/Carrousel.tsx";
import ProfileLocation from "@components/profiles/ProfileLocation.tsx";

interface ProfileProps {
    children: any[],
    links: JSX.Element,
    profileHeader: JSX.Element,
    profileInfo: JSX.Element,
    profileComments: JSX.Element,
    profileGalleries: JSX.Element,
}

export default function Profile({ links, profileHeader, profileInfo, profileComments, profileGalleries }: ProfileProps) {
    return (
        <Carrousel totalChildren={3}>
            <header className="flex-shrink-0 bg-white flex flex-col gap-6 border-b border-gray-200 pt-5 px-5">
                { links }
                { profileHeader }
                <div className="w-full flex">
                    <InteractiveTrigger event="onClick" field="active" id={0} self={0}>
                        <ProfileLocation icon="fa6-solid:user"/>
                    </InteractiveTrigger>
                    <InteractiveTrigger event="onClick" field="active" id={1} self={1}>
                        <ProfileLocation icon="fa6-solid:comment"/>
                    </InteractiveTrigger>
                    <InteractiveTrigger event="onClick" field="active" id={2} self={2}>
                        <ProfileLocation icon="fa6-solid:border-all"/>
                    </InteractiveTrigger>
                </div>
            </header>
            <Target className='w-screen h-full bg-gray-100'>
                { ...[profileInfo, profileComments, profileGalleries] }
            </Target>
        </Carrousel>
    )
}