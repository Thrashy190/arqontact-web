import { Icon } from "@iconify/react";
import FullScreenModal from "@components/common/FullScreenModal";
import { Search } from "@components/common/inputs";

export default function AllFilters() {
    return (
        <FullScreenModal id="set-collabs" title="Agregar colaboradores">
            <div className="flex flex-col gap-5">
                <Search id="search" placeholder="Buscar colaboradores..." />
                {/* <p className="text-gray-500">Aún no agregas ningún colaborador.</p> */}
                <div className="flex flex-col gap-2">
                    <ul className="bg-gray-100 overflow-x-auto no-scrollbar flex gap-2 rounded-lg p-2">
                        {
                            Array(10).fill(0).map((_, i) => {
                                return <li key={i} className="flex-shrink-0">
                                    <picture className="w-16 h-16 relative">
                                        <span className="absolute w-6 h-6 flex justify-center items-center rounded-full top-0 right-0 bg-gray-400">
                                            <Icon icon="fa6-solid:xmark" className="w-4 h-4 text-white"/>
                                        </span>
                                        <img className="w-16 h-16 object-cover rounded-full" src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg"/>
                                    </picture>
                                </li>
                            })
                        }
                    </ul>
                    <div className="flex flex-col divide-y divide-gray-200">
                        {
                            Array(10).fill(0).map((_, i) => {
                                return <label htmlFor={`pro-${i.toString()}`} key={i} className="flex py-2 justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <img src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg" className="w-8 h-8 object-cover rounded-full"/>
                                        <div className="flex flex-col">
                                            <span>Carne de Res</span>
                                        </div>
                                    </div>
                                    <input id={`pro-${i.toString()}`} type="checkbox" className="w-5 h-5"/>
                                </label>
                            })
                        }
                    </div>
                </div>
            </div>
        </FullScreenModal>
    )
}