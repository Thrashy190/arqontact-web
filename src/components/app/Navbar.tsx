import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useApp } from "@stores/app.store";

export default function Navbar() {
    const { location, setLocation } = useApp(state => state);

    useEffect(() => {
        const [,currentLocation] = window.location.pathname.split('/');
        setLocation(currentLocation);
    }, [])
    
    return (
        <nav className="z-20 sm:shadow-xl flex-shrink-0 w-screen sm:w-16 min-h-0 sm:h-screen flex flex-row sm:flex-col justify-between items-center bg-white border-t border-gray-200 sm:pb-5">
            <div className="w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-start sm:items-center sm:gap-8 p-5">
                <a href="/notifications" onClick={() => setLocation('notifications')} className={`text-xl ${ location == 'notifications' ? 'text-amber-400' : 'text-gray-500'}`}>
                    <Icon icon="fa6-solid:bell" className="w-4 h-4 sm:w-5 sm:h-5"/>
                </a>
                <a href="/boards" onClick={() => setLocation('boards')} className={`text-xl ${ location == 'boards' ? 'text-amber-400' : 'text-gray-500'}`}>
                    <Icon icon="fa6-solid:table-columns" className="w-4 h-4 sm:w-5 sm:h-5"/>
                </a>
                <a href="/my-profile/create-gallery" onClick={() => setLocation('create-gallery')} className={`sm:hidden text-xl ${ location == 'create-gallery' ? 'text-amber-400' : 'text-gray-500'}`}>
                    <Icon icon="fa6-solid:plus" className="w-4 h-4 sm:w-5 sm:h-5"/>
                </a>
                <a href="/dashboard" onClick={() => setLocation('dashboard')} className={`text-xl ${ location == 'dashboard' ? 'text-amber-400' : 'text-gray-500'}`}>
                    <Icon icon="fa6-solid:list" className="w-4 h-4 sm:w-5 sm:h-5"/>
                </a>
                <a href="/my-profile" onClick={() => setLocation('my-profile')} className={`sm:hidden text-xl ${ location == 'my-profile' ? 'text-amber-400' : 'text-gray-500'}`}>
                    <Icon icon="fa6-solid:user" className="w-4 h-4 sm:w-5 sm:h-5"/>
                </a>
            </div>
            <div className="hidden sm:block relative w-10 aspect-square">
                <label htmlFor="user-options-popup" className="cursor-pointer peer relative">
                    <input className="hidden" type="checkbox" id="user-options-popup"/>
                    <div className="w-full h-full text-white font-bold flex justify-center items-center bg-amber-400 rounded-full">
                        O
                    </div>
                </label>
                <label htmlFor="user-options-popup" className="fixed top-0 left-0 peer-has-[:checked]:block hidden w-screen h-screen bg-transparent"></label>
                <div className="peer-has-[:checked]:scale-100 scale-0 absolute [&>*:not(:first-child)]:pt-2 flex flex-col divide-y divide-gray-200 gap-2 bg-white py-2 px-4 bottom-[calc(100%+.75rem)] left-0 rounded-md shadow-strong transition-all">
                    <a href="/edit-my-profile" className="flex gap-3 items-center text-gray-600">
                        <Icon icon="fa6-solid:user"/>
                        <span>Editar perfil</span>
                    </a>
                    <a href="/my-profile/options/saved" className="flex gap-3 items-center text-gray-600">
                        <Icon icon="fa6-solid:bookmark"/>
                        <span>Guardados</span>
                    </a>
                    <a href="/configuration" className="flex gap-3 items-center text-gray-600">
                        <Icon icon="fa6-solid:gear"/>
                        <span>Configuración</span>
                    </a>
                    <a href="" className="flex gap-3 items-center text-gray-600">
                        <Icon icon="fa6-solid:right-from-bracket"/>
                        <span>Cerrar sesión</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}