import { Icon } from "@iconify/react";

export default function ProfileOptions() {
    return (
        <div className="flex gap-6 text-action">
            <Icon icon="fa-solid:ellipsis-v" className="w-4 h-4"/>
            <Icon icon="fa-solid:bookmark" className="w-4 h-4"/>
            <Icon icon="fa-solid:share-alt" className="w-4 h-4"/>
        </div>
    )
}