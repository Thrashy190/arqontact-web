import { useModal } from "@stores/modal.store";

interface Props {
    id: string,
    children: JSX.Element | JSX.Element[]
}

export default function Overlay({ id, children }: Props) {
    const { removeModal } = useModal(state => state);

    return (
        <div
            id={id}
            onClick={() => removeModal()}
            className={`transform translate-y-full transition-all z-50 w-screen h-screen absolute flex justify-center items-center bg-[rgba(0,0,0,.3)]`}
        >
            { children }
        </div>
    );
}