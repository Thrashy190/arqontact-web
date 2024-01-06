import { Icon } from "@iconify/react";
import Tabs from "@components/common/Tabs";

export default function Grade() {
    return (
        <div className="flex flex-col gap-5">
            <div className='flex items-center gap-1 text-gray-600 text-lg font-semibold'>
                <span>Calificación</span>
            </div>
            <div className="bg-blue-50 text-blue-600 rounded-md flex items-center gap-3 px-4 py-2">
                <Icon icon="fa6-solid:circle-info" className="w-5 h-5"/>
                <span className="font-medium">Calificación de por lo menos...</span>
            </div>
            <Tabs
                tabId="grade"
                items={[
                    { name:'4.5', id: '45'},
                    { name:'4.0', id: '40'},
                    { name:'3.5', id: '35'},
                    { name:'Cualquiera', id: 'all'},
                ]}
            />
        </div>
    )
}