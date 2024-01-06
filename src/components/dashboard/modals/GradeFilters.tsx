import { useModal } from "@stores/modal.store";
import Grade from "./Grade";

export default function GradeFilters() {
    const { setModal } = useModal(state => state);
    return (
        <div onClick={(e) => e.stopPropagation()} className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl self-end`}>
            <Grade />
            <div className="flex gap-5">
                <button onClick={() => setModal(null)} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                <button onClick={() => setModal(null)} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
            </div>
        </div>
    );
};