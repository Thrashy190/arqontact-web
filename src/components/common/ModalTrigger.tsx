// import { useModal } from "@stores/modal.store";

// interface ModalTriggerProps {
//     id: string,
//     className: string,
//     children: JSX.Element | string
// }

// export default function ModalTrigger({ id, className, children } : ModalTriggerProps) {
//     const { setModal } = useModal(state => state);

//     return <div className={className} onClick={() => { setModal(id) }}>
//         { children }
//     </div>
// }