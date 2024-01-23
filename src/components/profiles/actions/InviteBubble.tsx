import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

const InviteBubble = () => {
    const { setModal } = useModal(state => state);

    function invite() {
        setModal('invite');
    }

    return (
        <button onClick={() => invite()} className={`bg-amber-100 text-amber-400 p-2 rounded-xl`}>
            <Icon icon="fa6-solid:envelope" className="w-5 h-5"/>
        </button>
    );
};

export default InviteBubble;
