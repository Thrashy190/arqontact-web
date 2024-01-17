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
        <nav className="z-20 sm:shadow-xl flex-shrink-0 w-screen sm:w-16 h-auto sm:h-screen bg-white flex flex-row sm:flex-col justify-between sm:justify-start sm:items-center sm:gap-8 p-5 border-t border-gray-200">
            <a href="/notifications" onClick={() => setLocation('notifications')} className={`text-xl ${ location == 'notifications' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:bell" className="w-4 h-4 sm:w-5 sm:h-5"/>
            </a>
            <a href="/boards" onClick={() => setLocation('boards')} className={`text-xl ${ location == 'boards' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:table-columns" className="w-4 h-4 sm:w-5 sm:h-5"/>
            </a>
            <a href="/my-profile/create-gallery" onClick={() => setLocation('create-gallery')} className={`text-xl ${ location == 'create-gallery' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:plus" className="w-4 h-4 sm:w-5 sm:h-5"/>
            </a>
            <a href="/dashboard" onClick={() => setLocation('dashboard')} className={`text-xl ${ location == 'dashboard' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:list" className="w-4 h-4 sm:w-5 sm:h-5"/>
            </a>
            <a href="/my-profile" onClick={() => setLocation('my-profile')} className={`text-xl ${ location == 'my-profile' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:user" className="w-4 h-4 sm:w-5 sm:h-5"/>
            </a>
        </nav>
    )
}