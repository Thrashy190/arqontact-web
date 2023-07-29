interface Props {
    children: JSX.Element|JSX.Element[]
    classes?: string
    right: boolean
}

export default function RoadmapElement({ children, classes, right }: Props) {
    return (
        <div className={`w-full ${ classes ?? '' } flex ${ right ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start' } items-center border-2 border-gray-200 rounded-xl p-4 xs:p-8 lg:border-0 space-x-8`}>
            <div className="flex flex-col space-y-8">
                { children }
            </div>
        </div>
    )
}