import { Icon } from "@iconify/react";
import FullScreenModal from "@components/common/FullScreenModal";

export default function Invite() {
    return (
        <FullScreenModal id="invite" title="Enviar invitación">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <label className="font-medium" html-for="board">Tablero</label>
                    <input
                        className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                        type="text"
                        placeholder="Hospital San Felipe"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium" html-for="phase">Etapa</label>
                    <input
                        className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                        type="text"
                        placeholder="Cimentación"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium" html-for="job">Puesto</label>
                    <input
                        className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                        type="text"
                        placeholder="Carpintero"
                    />
                </div>
            </div>
        </FullScreenModal>
    )
}