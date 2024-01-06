import { Icon } from "@iconify/react";
import FullScreenModal from "@components/common/FullScreenModal";

export default function AllFilters() {
    return (
        <FullScreenModal id="comment" title="Agregar comentario">
            <div className="flex flex-col gap-5">
                <div className="bg-amber-50 font-medium rounded-md text-amber-400 p-3">
                    Estás escribiendo un comentario en el perfil de Juan José Cruz Aguirre
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium" html-for="comment">Comentario</label>
                    <textarea
                        className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                        placeholder="Rifado el pana"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium" html-for="comment">Puntuación</label>
                    <div className="w-full flex pt-4 gap-3 justify-between text-gray-200">
                        {
                            Array(5).fill(0).map((_, i) => {
                                return <Icon key={i} icon="fa6-solid:star" className="w-10 h-10"/>
                            })
                        }
                    </div>
                </div>
            </div>
        </FullScreenModal>
    )
}