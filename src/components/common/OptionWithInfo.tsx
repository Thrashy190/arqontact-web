interface Props {
    name: string,
    title: string
    description: string,
    active?: boolean
    onClick?(): any
}
  
export default function OptionWithInfo({ name, title, description, active, onClick }: Props) {
    const elementAction = () => {
        if (onClick) {
          onClick();
        }
    }

    return (
        <div onClick={() => elementAction()} className={`flex items-center rounded-md ${ active ? 'bg-amber-50 text-amber-400' : 'bg-gray-100' } gap-4 p-4 font-medium transition-all`}>
            <input className="w-4 h-4 flex-shrink-0 bg-white" checked={ active } readOnly type="radio" name={ name }/>
            <div className={`flex flex-col ${ active ? 'gap-2' : '' }`}>
                <h2 className='font-semibold'>{ title }</h2>
                <p className={`${ active ? 'h-auto' : ''} h-0 overflow-hidden text-sm`}>{ description }</p>
            </div>
        </div>
    )
}