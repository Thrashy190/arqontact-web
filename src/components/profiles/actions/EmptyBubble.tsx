const EmptyBubble = ({ active }: { active?: boolean }) => {
    return (
        <button className={`${ active ? '' : 'hidden' } z-10 fixed bottom-20 right-5 bg-amber-100 text-amber-400 rounded-xl`}>
        </button>
    );
};

export default EmptyBubble;
