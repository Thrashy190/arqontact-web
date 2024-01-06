import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

const CommentBubble = ({ active }: { active?: boolean }) => {
    const { setModal } = useModal(state => state);

    function comment() {
        setModal('comment');
    }

    return (
        <button onClick={() => comment()} className={`${ active ? '' : 'hidden' } z-10 fixed bottom-20 right-5 bg-amber-100 text-amber-400 p-3 rounded-xl`}>
            <Icon icon="fa6-solid:message" className="w-6 h-6"/>
        </button>
    );
};

export default CommentBubble;
