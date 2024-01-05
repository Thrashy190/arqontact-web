import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

export default function GradeFilters() {
    const { setModal } = useModal(state => state);
    return (
        <div onClick={(e) => e.stopPropagation()} className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl self-end`}>
            <div className="flex flex-col gap-5">
                <div className='flex items-center gap-1 text-gray-600 text-lg font-semibold'>
                    <span>Calificación</span>
                </div>
                <div className="bg-blue-50 text-blue-600 rounded-md flex items-center gap-3 px-4 py-2">
                    <Icon icon="fa6-solid:circle-info" className="w-5 h-5"/>
                    <span className="font-medium">Calificación de por lo menos...</span>
                </div>
                <div className="bg-gray-100 p-2 gap-2 text-gray-600 flex rounded-xl">
                    <div className="bg-white rounded-xl shadow-md font-semibold text-amber-400 px-2 py-1 flex-1 flex justify-center">
                        <span>4.5</span>
                    </div>
                    <div className="px-2 py-1 flex-1 flex justify-center">
                        <span>4.0</span>
                    </div>
                    <div className="px-2 py-1 flex-1 flex justify-center">
                        <span>3.5</span>
                    </div>
                    <div className="px-2 py-1 flex-1 flex justify-center">
                        <span>Cualquiera</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <button onClick={() => setModal(null)} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                <button onClick={() => setModal(null)} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
            </div>
        </div>
    );
};