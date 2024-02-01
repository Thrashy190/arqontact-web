import { Icon } from "@iconify/react";

export default function BackLink() {
    return <div onClick={() => window.history.back()} className='z-[6] text-xl'>
        <Icon icon="fa-solid:chevron-left" className="w-5 h-5"/>
    </div>
}