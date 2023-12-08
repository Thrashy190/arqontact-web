import { useModal } from "@stores/modal.store"

export default function Modal() {
    const { modal, setModal } = useModal(state => state);

    return (
        <div></div>
    )
}