import { Icon } from "@iconify/react";
import FullScreenModal from "@components/common/FullScreenModal";
import { Search } from "@components/common/inputs";

export default function AllFilters() {
    return (
        <FullScreenModal id="set-hashtags" title="Agregar hashtags">
            <div className="flex flex-col gap-5">
                <Search id="search" placeholder="Buscar hashtags..." />
                <div className="flex flex-col gap-2">
                    <ul className="flex flex-wrap no-scrollbar gap-1 rounded-lg">
                        {
                            Array(5).fill(0).map((_, i) => {
                                return <div className="flex items-center py-1 px-2 rounded-md gap-3 bg-amber-100 text-amber-400 font-medium">
                                    <span>#block</span>
                                    <Icon icon="fa-solid:times" className="w-3 h-3"/>
                                </div>
                            })
                        }
                    </ul>
                    <div className="flex flex-col divide-y divide-gray-200">
                        {
                            Array(10).fill(0).map((_, i) => {
                                return <label htmlFor={`ht-${i.toString()}`} key={i} className="flex py-2 justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <span className="bg-gray-400 w-8 h-8 flex justify-center text-white text-xl items-center object-cover rounded-full">
                                            #
                                        </span>
                                        <div className="flex flex-col">
                                            <span>#gatitos</span>
                                        </div>
                                    </div>
                                    <input id={`ht-${i.toString()}`} type="checkbox" className="w-5 h-5"/>
                                </label>
                            })
                        }
                    </div>
                </div>
            </div>
        </FullScreenModal>
    )
}