import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Props {
    active?: boolean,
    icon: string,
    onClick?(): any
}

export default function ProfileLocation({ active = false, icon, onClick }: Props) {
    const elementAction = () => {
        if (onClick) {
          onClick();
        }
    }

    return (
        <div onClick={() => elementAction()} className='flex justify-center flex-grow flex-shrink-0'>
            <span className={`flex flex-col justify-center text-sm ${active ? 'text-amber-400' : 'text-gray-400'} transition-all`}>
                <Icon icon={icon} className={`self-center`}/>
                { active ? <motion.div layoutId='header-underline' className='w-8 h-[3px] mt-2 rounded-t-md bg-amber-400'></motion.div>
                : <div className='w-8 h-[3px] bg-transparent mt-2'></div> }
            </span>
        </div>
    )
}