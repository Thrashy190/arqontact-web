import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@stores/modal.store";

export default function Overlay() {
    const { modal, setModal } = useModal(state => state);

    return (
        <AnimatePresence>
            { modal ? <motion.div
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0 }}
                exit={{ translateY: '100%' }}
                transition={{ type: "tween", duration: 0.2 }}
                onClick={() => setModal(null)}
                className={`z-50 w-screen h-screen absolute flex justify-center items-center bg-[rgba(0,0,0,.3)]`}
            >
                { modal }
            </motion.div> : null }
        </AnimatePresence>
    );
}