import { Icon } from "@iconify/react";
import { Carrousel, Target, InteractiveTrigger } from "@components/common/Carrousel";
import Pin from "@components/projects/Pin";

export default function CreatePhase() {
    return (
        <Carrousel totalChildren={4}>
            <div className="flex-grow flex flex-col gap-3">
                <header className="relative mt-4 border-t-4 border-dashed border-gray-400 flex justify-between">
                    <InteractiveTrigger event="onClick" field="active" id={0} self={0}>
                        <Pin self={0}/>
                    </InteractiveTrigger>
                    <InteractiveTrigger event="onClick" field="active" id={1} self={1}>
                        <Pin self={1}/>
                    </InteractiveTrigger>
                    <InteractiveTrigger event="onClick" field="active" id={2} self={2}>
                        <Pin self={2}/>
                    </InteractiveTrigger>
                    <InteractiveTrigger event="onClick" field="active" id={3} self={3}>
                        <Pin self={3}/>
                    </InteractiveTrigger>
                </header>
                <Target>
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-1">
                        <label className="font-medium" html-for="comment">Título de etapa</label>
                        <div className="flex items-center my-3 gap-3 rounded-md bg-amber-50 text-amber-400 p-6">
                            <span>
                                <Icon className="flex-shrink-0 w-6 h-6" icon="fa6-solid:circle-info" />
                            </span>
                            <h2 className="font-medium text-sm">
                                Utilizaremos tu correo para enviarte mensajes
                                importantes.
                            </h2>
                            <span>
                                <Icon className="flex-shrink-0 self-start w-4 h-4" icon="fa6-solid:times" />
                            </span>
                        </div>
                        <input
                            className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                            placeholder="Hospital San Felipe"
                        />
                    </div>
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-3">
                        <div className="justify-between flex flex-shrink">
                            <span>Periodo</span>
                            <span className="bg-amber-100 text-amber-400 px-2 py-1 rounded-md">3 meses</span>
                        </div>
                        <div className="justify-between flex flex-shrink">
                            <label html-for="start">Inicio</label>
                            <input className="bg-gray-100 text-gray-500 px-4 py-1 rounded-md" type="date" />
                        </div>
                        <div className="justify-between flex flex-shrink">
                            <label html-for="end">Final</label>
                            <input className="bg-gray-100 text-gray-500 px-4 py-1 rounded-md" type="date" />
                        </div>
                    </div>
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-1">
                        <label className="font-medium" html-for="comment">Puestos requeridos</label>
                        <input
                            className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                            placeholder="Carpintero"
                        />
                    </div>
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-1">
                        <label className="font-medium" html-for="comment">Puestos</label>
                        <div className="flex items-center my-3 gap-3 rounded-md bg-amber-50 text-amber-400 p-6">
                            <span>
                                <Icon className="flex-shrink-0 w-6 h-6" icon="fa6-solid:circle-info" />
                            </span>
                            <h2 className="font-medium text-sm">
                                Utilizaremos tu correo para enviarte mensajes
                                importantes.
                            </h2>
                            <span>
                                <Icon className="flex-shrink-0 self-start w-4 h-4" icon="fa6-solid:times" />
                            </span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium" htmlFor="job[]">Bloquero</label>
                                <div className="flex items-center gap-4">
                                    <p className="text-gray-500 text-xs">Cantidad</p>
                                    <input
                                        name="job[]"
                                        type="number"
                                        className="w-14 bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                                        placeholder="30"
                                    />
                                    <div className="w-6 h-6 bg-lime-500 rounded-full border-[6px] border-lime-200"></div>
                                    <Icon className="w-4 h-4 text-gray-500" icon="fa6-solid:trash-alt" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium" htmlFor="job[]">Bloquero</label>
                                <div className="flex items-center gap-4">
                                    <p className="text-gray-500 text-xs">Cantidad</p>
                                    <input
                                        name="job[]"
                                        type="number"
                                        className="w-14 bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                                        placeholder="30"
                                    />
                                    <div className="w-6 h-6 bg-lime-500 rounded-full border-[6px] border-lime-200"></div>
                                    <Icon className="w-4 h-4 text-gray-500" icon="fa6-solid:trash-alt" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium" htmlFor="job[]">Bloquero</label>
                                <div className="flex items-center gap-4">
                                    <p className="text-gray-500 text-xs">Cantidad</p>
                                    <input
                                        name="job[]"
                                        type="number"
                                        className="w-14 bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                                        placeholder="30"
                                    />
                                    <div className="w-6 h-6 bg-lime-500 rounded-full border-[6px] border-lime-200"></div>
                                    <Icon className="w-4 h-4 text-gray-500" icon="fa6-solid:trash-alt" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Target>
            </div>
            <button className="justify-self-end mb-5 py-2 text-center font-semibold bg-amber-400 text-white rounded-xl uppercase">Continuar</button>
        </Carrousel>
    )
}