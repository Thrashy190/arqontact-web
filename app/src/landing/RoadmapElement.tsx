export default function RoadmapElement(props: any) {
    return (
        <div className="flex items-center space-x-8">
            <div className="flex flex-col">
                {props.children}
            </div>
        </div>
    )
}