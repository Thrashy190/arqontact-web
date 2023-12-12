import { Icon } from "@iconify/react";
import { useModal } from "@stores/modal.store";

export default function AllFilters() {
    const { setModal } = useModal(state => state);
    return (
        <div onClick={(e) => e.stopPropagation()} className={`w-full h-full bg-white p-5 flex flex-col justify-between gap-10 self-end`}>
            <div className="flex flex-col gap-10 overflow-y-auto mobile-scrollbar">
                <div onClick={() => setModal(null)} className="sticky top-0 bg-white flex items-center px-5 gap-4 text-gray-500">
                    <span className='text-xl'>
                        <Icon icon="fa6-solid:chevron-left" className="w-5 h-5"/>
                    </span>
                    <span className='text-2xl'>
                        Filtros
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col px-5 gap-5">
                        <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                            <span>Ordenar por</span>
                        </div>
                        <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                            <div className="px-2 py-1 flex-1 flex justify-center">
                                <span>Ascendente</span>
                            </div>
                            <div className="px-2 py-1 flex-1 flex justify-center">
                                <span>Descendente</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col px-5 gap-5">
                        <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                            <span>Calificación</span>
                            <span className='text-base font-normal text-gray-400'>· por lo menos</span>
                        </div>
                        <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
                            <div className="px-2 py-1 flex-1 flex justify-center items-center gap-2">
                                <span>
                                    Cualquiera
                                </span>
                            </div>
                            <div className="px-2 py-1 flex-1 flex justify-center items-center gap-2">
                                <span>
                                    <Icon icon="fa6-solid:star" className="w-3 h-3"/>
                                </span>
                                <p>3.5</p>
                            </div>
                            <div className="px-2 py-1 flex-1 flex justify-center items-center gap-2">
                                <span>
                                    <Icon icon="fa6-solid:star" className="w-3 h-3"/>
                                </span>
                                <p>4.0</p>
                            </div>
                            <div className="px-2 py-1 flex-1 flex justify-center items-center gap-2">
                                <span>
                                    <Icon icon="fa6-solid:star" className="w-3 h-3"/>
                                </span>
                                <p>4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col px-5 gap-5">
                        <div className='flex items-center gap-1 text-gray-600 text-lg font-medium'>
                            <span>Puestos</span>
                        </div>
                        <div className="bg-white text-gray-600 flex flex-col rounded-lg divide-y divide-gray-200 border border-gray-200">
                            <div className="w-full flex-shrink flex divide-x divide-gray-200">
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="tabler:window"/></span>
                                    <span className='w-full self-stretch text-center'>Cancelero</span>
                                </div>
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="mdi:anvil"/></span>
                                    <span className='w-full self-stretch text-center'>Herrero</span>
                                </div>
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="tabler:wood"/></span>
                                    <span className='w-full self-stretch text-center'>Carpintero</span>
                                </div>
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="tabler:brush"/></span>
                                    <span className='w-full self-stretch text-center'>Pintor</span>
                                </div>
                            </div>
                            <div className="w-full flex-shrink flex divide-x divide-gray-200"> 
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="tabler:wall"/></span>
                                    <span className='w-full self-stretch text-center'>Bloquero</span>
                                </div>
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="mdi:pipe"/></span>
                                    <span className='w-full self-stretch text-center'>Plomero</span>
                                </div>
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="tabler:trowel"/></span>
                                    <span className='w-full self-stretch text-center'>Yesero</span>
                                </div>
                                <div className="flex flex-col flex-1 text-xs justify-center items-center p-2 gap-1">
                                    <span className='text-base'><Icon className="w-6 h-6" icon="tabler:shovel"/></span>
                                    <span className='w-full self-stretch text-center'>Albañíl</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-5">
                <button onClick={() => setModal(null)} className='bg-gray-100 text-gray-400 py-1 rounded-lg text-lg text-center flex-grow'>Cancelar</button>
                <button onClick={() => setModal(null)} className='bg-amber-100 text-amber-400 py-1 rounded-lg text-lg text-center flex-grow'>Confirmar</button>
            </div>
        </div>
    )
}