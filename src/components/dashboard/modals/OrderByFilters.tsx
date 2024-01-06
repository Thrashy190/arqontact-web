import { useModal } from "@stores/modal.store";
import Overlay from "@components/common/Overlay";
import OrderBy from "./OrderBy";

export default function OrderByFilters() {
    const { removeModal } = useModal(state => state);
    return (
        <Overlay id="order-by-filters">
            <div onClick={(e) => e.stopPropagation()} className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl self-end`}>
                <OrderBy />
                <div className="flex gap-5">
                    <button onClick={() => removeModal()} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                    <button onClick={() => removeModal()} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
                </div>
            </div>
        </Overlay>
    );
};