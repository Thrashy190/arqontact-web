import { useState } from "react";
import { motion } from "framer-motion";

interface TabItem {
    name: string,
    id: string
}

interface TabsProps {
    tabId: string,
    items: TabItem[]
}

export default function Tabs({ tabId, items }: TabsProps) {
    const [currentItem, setCurrentItem] = useState<string>(items[0].id);
    return (
        <div className="bg-gray-100 p-2 gap-2 text-gray-600 flex rounded-xl">
            {
                items.map(({ name, id }) => {
                    return <div onClick={() => setCurrentItem(id)} className="relative flex-1 flex justify-center w-full">
                        <span className={`${currentItem == id ? 'font-semibold text-amber-400' : ''} z-[1] py-1`}>
                            { name }
                        </span>
                        {
                            currentItem == id ? <motion.div
                                layoutId={`${tabId}-tab-spotlight`}
                                className="z-0 w-full h-full absolute bg-white rounded-xl shadow-md">
                            </motion.div> : null
                        }
                    </div>
                })
            }
        </div>
    )
}