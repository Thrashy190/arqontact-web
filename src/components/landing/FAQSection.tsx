interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function FAQItem({ children }: Props) {
    return (
        <div className="md:w-[500px] lg:w-[800px] xl:w-[1000px] flex flex-col divide-y divide-gray-200 text-gray-800 flex-1 grow bg-white rounded-md px-5">
            {children}
        </div>
    )
}