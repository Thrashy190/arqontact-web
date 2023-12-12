import { useModal } from "@stores/modal.store";

export default function OrderByFilters() {
    const { setModal } = useModal(state => state);
    return (
        <div onClick={(e) => e.stopPropagation()} className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl self-end`}>
            <div className="flex flex-col px-5 gap-5">
                <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                    <span>Ordenar por</span>
                </div>
                <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                    <div className="px-2 py-1 flex-grow flex justify-center">
                        <span>Ascendente</span>
                    </div>
                    <div className="px-2 py-1 flex-grow flex justify-center">
                        <span>Descendente</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-5">
                <button onClick={() => setModal(null)} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                <button onClick={() => setModal(null)} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
            </div>
        </div>
    );
};