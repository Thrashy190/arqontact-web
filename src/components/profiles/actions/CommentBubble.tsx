import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

const CommentBubble = () => {
    const { setModal } = useModal(state => state);

    function comment() {
        setModal('comment');
    }

    return (
        <button onClick={() => comment()} className={`bg-amber-100 text-amber-400 p-2 rounded-xl`}>
            <Icon icon="fa6-solid:message" className="w-5 h-5"/>
        </button>
    );
};

export default CommentBubble;
