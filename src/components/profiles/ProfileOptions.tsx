import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

export default function ProfileOptions() {
    const { setModal } = useModal(state => state);

    // function shareProfile() {
    //     setModal();
    // }

    // function saveProfile() {
    //     setModal();
    // }

    return (
        <div className="flex gap-6 text-action">
            <Icon icon="fa-solid:ellipsis-v" className="w-4 h-4"/>
            <Icon icon="fa-solid:bookmark" className="w-4 h-4"/>
            <Icon icon="fa-solid:share-alt" className="w-4 h-4"/>
        </div>
    )
}