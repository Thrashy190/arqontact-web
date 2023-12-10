import { Icon } from "@iconify/react";
import { useApp } from "@stores/app.store";

export default function Navbar() {
    const { location } = useApp(state => state);
    
    return (
        <nav className="z-20 flex-shrink-0 w-screen bg-white flex justify-between p-5 border-t border-gray-200">
            <span className={`text-xl ${ location == 'notifications' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:bell" className="w-4 h-4"/>
            </span>
            <span className={`text-xl ${ location == 'tables' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:table-columns" className="w-4 h-4"/>
            </span>
            <span className={`text-xl ${ location == 'dashboard' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:map" className="w-4 h-4"/>
            </span>
            <span className={`text-xl ${ location == 'my-profile' ? 'text-amber-400' : 'text-gray-500'}`}>
                <Icon icon="fa6-solid:user" className="w-4 h-4"/>
            </span>
        </nav>
    )
}