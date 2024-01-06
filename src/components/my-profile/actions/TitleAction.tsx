import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

export default function TitleAction({ title, action }: { title: string, action: string }) {
    const { setModal } = useModal(state => state);

    function setAction() {
        setModal(action);
    }

    return (
        <div onClick={() => setAction()} className="flex justify-between items-center">
            <span className="font-medium">{ title }</span>
            <div className="flex items-center gap-2">
                <span className="text-sm">Agregar</span>
                <Icon icon="fa6-solid:chevron-right" className="w-4 h-4 text-gray-400"/>
            </div>
        </div>
    );
}   