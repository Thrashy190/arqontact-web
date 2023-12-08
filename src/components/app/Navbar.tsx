
import { Fragment } from "react";
import { useApp } from "@stores/app.store";

export default function Navbar() {
    const { location } = useApp(state => state);
    
    return (
        <Fragment>
            <span className={`text-xl ${ location == 'notifications' ? 'text-amber-400' : 'text-gray-500'}`}>
                <i className="fas fa-bell"/>
            </span>
            <span className={`text-xl ${ location == 'tables' ? 'text-amber-400' : 'text-gray-500'}`}>
                <i className="fas fa-columns"/>
            </span>
            <span className={`text-xl ${ location == 'dashboard' ? 'text-amber-400' : 'text-gray-500'}`}>
                <i className="fas fa-map"/>
            </span>
            <span className={`text-xl ${ location == 'my-profile' ? 'text-amber-400' : 'text-gray-500'}`}>
                <i className="fas fa-user-alt"/>
            </span>
        </Fragment>
    )
}