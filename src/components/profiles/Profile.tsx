import { Carrousel, InteractiveTrigger, Observer, Target } from "@components/common/Carrousel.tsx";
import ProfileLocation from "@components/profiles/ProfileLocation.tsx";
import { Comment, Invite } from "./modals";
import { Fragment } from "react";

interface ProfileProps {
    children: any[],
    links: JSX.Element,
    profileHeader: JSX.Element,
    profileInfo: JSX.Element,
    profileComments: JSX.Element,
    profileGalleries: JSX.Element,
    withActions?: boolean,
}

export default function Profile({ links, profileHeader, profileInfo, profileComments, profileGalleries, withActions = false }: ProfileProps) {
    return (
        <div className="min-w-0 max-w-[700px] flex flex-col">
            <Comment />
            <Invite />
            <Carrousel totalChildren={3}>
                <header className="flex-shrink-0 bg-white flex flex-col gap-6 sm:gap-2 border-b border-gray-200 pt-5 pb-2 sm:pb-6 px-5">
                    { links }
                    { profileHeader }
                    <div className="sm:hidden bg-gray-100 p-1 gap-2 text-gray-600 flex rounded-xl">
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
                <Target className='w-screen max-w-[700px] h-full sm:h-auto sm:flex-col bg-gray-100 sm:bg-white'>
                    { ...[profileInfo, profileComments, profileGalleries] }
                </Target>
            </Carrousel>
        </div>
    )
}