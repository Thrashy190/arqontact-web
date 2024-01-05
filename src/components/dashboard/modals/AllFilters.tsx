import { Icon } from "@iconify/react";
import FullScreenModal from "@components/common/FullScreenModal";

export default function AllFilters() {
    return (
        <FullScreenModal title="Filtros">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='flex items-center gap-1 text-gray-600 text-lg font-semibold'>
                        <span>Tipo de orden</span>
                    </div>
                    <div className="bg-gray-100 p-2 gap-2 text-gray-600 flex rounded-xl">
                        <div className="bg-white rounded-xl shadow-md font-semibold text-amber-400 px-2 py-1 flex-1 flex justify-center">
                            <span>Ascendente</span>
                        </div>
                        <div className="px-2 py-1 flex-1 flex justify-center">
                            <span>Descendente</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
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
                    {/* <div className="bg-white text-gray-600 flex rounded-lg divide-x divide-gray-200 border border-gray-200">
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
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <div className='flex items-center gap-1 text-gray-600 text-lg font-semibold'>
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
        </FullScreenModal>
    )
}