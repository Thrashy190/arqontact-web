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
            <span className={`w-6 h-6 flex flex-col justify-center text-sm ${active ? 'text-amber-400' : 'text-gray-400'} transition-all`}>
                <Icon icon={icon} className={`self-center z-[1]`}/>
                { active ? <motion.div layoutId='header-underline' className='z-0 absolute w-6 h-6 rounded-md bg-white shadow-md'></motion.div>
                : null }
            </span>
        </div>
    )
}