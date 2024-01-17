import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";
// import Overlay from "@components/common/Overlay";

export default function Postulate() {
    const { removeModal } = useModal(state => state);
    // return (
        // <Overlay id="postulate">
        //     <div onClick={(e) => e.stopPropagation()} className={`w-full bg-white p-5 flex flex-col gap-10 rounded-t-xl self-end`}>
        //         <div className="flex flex-col gap-5">
        //             <h1 className="text-gray-600 text-lg font-semibold">Confirmar</h1>
        //             <div className="flex items-center gap-5">
        //                 <span className="bg-amber-100 rounded-full p-3 text-amber-500">
        //                     <Icon icon="fa6-solid:info" className="w-8 h-8"/>
        //                 </span>
        //                 <p className="text-lg">
        //                     Estás aplicando para el puesto de <span className="font-medium text-amber-400">BLOQUERO</span> para el tablero <span className="font-medium text-amber-400">Hospital San Felipe</span>.
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="flex gap-5">
        //             <button onClick={() => removeModal()} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
        //             <button onClick={() => removeModal()} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
        //         </div>
        //     </div>
        // </Overlay>
    // );
};