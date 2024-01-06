import Tabs from "@components/common/Tabs";

export default function OrderBy() {
    return (
        <div className="flex flex-col gap-5">
            <div className='flex items-center gap-1 text-gray-600 text-lg font-semibold'>
                <span>Tipo de orden</span>
            </div>
            <Tabs
                tabId="orderby"
                items={[
                    { name:'Ascendente', id: 'asc'},
                    { name:'Descendente', id: 'desc'}
                ]}
            />
        </div>
    )
}