import { Icon } from "@iconify/react";
import { Carrousel, Target, InteractiveTrigger } from "@components/common/Carrousel";
import Pin from "@components/boards/Pin";

export default function CreateProject() {
    return (
        <Carrousel totalChildren={3}>
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
                </header>
                <Target> 
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-1">
                        <label className="font-medium" html-for="comment">Título</label>
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
                            className="bg-gray-100 px-4 py-2 rounded-lg border-2 border-transparent focus-visible:border-gray-300 outline-none"
                            placeholder="Hospital San Felipe"
                        />
                    </div>
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-1">
                        <label className="font-medium" html-for="comment">Ubicación</label>
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
                            className="bg-gray-100 px-4 py-2 rounded-lg border-2 border-transparent focus-visible:border-gray-300 outline-none"
                            placeholder="Zamora, Michoacán."
                        />
                        <a href="#" className="flex justify-center items-center gap-3 mt-2 py-2 rounded-md border border-gray-200 text-action">
                            <Icon icon="fa6-solid:map-pin" className="w-5 h-5"/>
                            <p className="font-medium">Usar ubicación actual</p>
                        </a>
                    </div>
                    <div className="snap-center w-[calc(100vw-2.5rem)] flex-shrink-0 flex flex-col gap-1">
                        <label className="font-medium" html-for="comment">Estado</label>
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
                        <div className="flex justify-center gap-6">
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-lime-500 rounded-full border-[6px] border-lime-200"></div>
                                <span className="font-medium">Activo</span>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-gray-500 rounded-full border-[6px] border-gray-200"></div>
                                <span className="font-medium">En espera</span>
                            </div>
                        </div>
                    </div>
                </Target>
            </div>
            <button className="justify-self-end mb-5 py-2 text-center font-semibold bg-amber-400 text-white rounded-xl uppercase">Continuar</button>
        </Carrousel>
    )
}