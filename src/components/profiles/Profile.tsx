import { Carrousel, InteractiveTrigger, Observer, Target } from "@components/common/Carrousel.tsx";
import ProfileLocation from "@components/profiles/ProfileLocation.tsx";
import { CommentBubble, EmptyBubble, InviteBubble } from "./actions";
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
        <Fragment>
            <Comment />
            <Invite />
            <Carrousel totalChildren={3}>
                <header className="flex-shrink-0 bg-white flex flex-col gap-6 border-b border-gray-200 pt-5 pb-2 px-5">
                    { links }
                    { profileHeader }
                    <div className="bg-gray-100 p-1 gap-2 text-gray-600 flex rounded-xl">
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
                { withActions ?
                    <Fragment>
                        <Observer field="active" self={0}>
                            <InviteBubble />
                        </Observer>
                        <Observer field="active" self={1}>
                            <CommentBubble />
                        </Observer>
                        <Observer field="active" self={2}>
                            <EmptyBubble />
                        </Observer>
                    </Fragment> :
                    null
                }
                <Target className='w-screen h-full bg-gray-100'>
                    { ...[profileInfo, profileComments, profileGalleries] }
                </Target>
            </Carrousel>
        </Fragment>
    )
}