interface Props {
    active?: boolean,
    onClick?(): any,
    loc?: number,
    self?: number
}

export default function Pin({ active = false, onClick, loc, self }: Props) {
    const location = loc ? loc : -1;

    const elementAction = () => {
        if (onClick) {
          onClick();
        }
    }

    return (
        <div
            onClick={() => elementAction()}
            className={`w-6 h-6 transform -translate-y-3.5 ${
                active ? 
                    'bg-amber-500 border-amber-200' : 
                    (self <= location ? 'bg-lime-500 border-lime-200' : 'bg-gray-500 border-gray-200')
                } rounded-full border-[6px]`}
        ></div>
    )
}