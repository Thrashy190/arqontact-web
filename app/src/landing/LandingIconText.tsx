export default function LandingIconText(props: any) {
  return (
    <div className="w-96 p-8 space-y-10 flex flex-col justify-center items-center">
      <div className="w-20 h-20 flex justify-center items-center text-amber-400 rounded-full shadow-md">
        {props.icon}
      </div>
      <p className='text-center w-full text-2xl'>{props.description}</p>
    </div>
  )
}