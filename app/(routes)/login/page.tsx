import Image from 'next/image';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
    return (
        <main className="w-full h-screen pb-16 flex flex-col justify-between py-4 px-8 relative">
            <div className="flex flex-row-reverse">
                <Image
                    className='inline'
                    src="/logo_light.svg"
                    width={135}
                    height={25}
                    alt="logo"
                />
            </div>
            <div className="flex flex-col gap-6">
                <h1 className='text-3xl font-normal'>Iniciemos</h1>
                <div className="flex flex-col gap-1">
                    <label className='font-medium' htmlFor="mail">Correo electrónico</label>
                    <input
                        className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                        type="text"
                        placeholder='correo@ejemplo.com'
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-medium' htmlFor="password">Contraseña</label>
                    <input
                        className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                        type="text"
                        placeholder='correo@ejemplo.com'
                    />
                </div>
                <div className="flex justify-between">
                    <button className='flex text-xs items-center bg-amber-100 text-amber-400 rounded-full px-2 py-1 gap-3'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Correo</span>
                    </button>
                    <button className='flex text-xs items-center bg-gray-100 text-gray-400 rounded-full px-2 py-1 gap-3'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Teléfono</span>
                    </button>
                </div>
                <button className='py-2 font-semibold bg-amber-400 text-white rounded-xl uppercase'>
                    Iniciar Sesión
                </button>
                <div className="flex flex-row-reverse">
                    <a 
                        href="/register"
                        className='text-amber-400 underline'
                    >
                        Aún no tengo cuenta
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className='font-medium'>Iniciar sesión con:</h2>
                <div className="flex justify-between">
                    <button className='flex text-xs items-center bg-gray-100 text-gray-400 rounded-full px-2 py-1 gap-3'>
                        <FontAwesomeIcon icon={faGoogle} />
                        <span>Google</span>
                    </button>
                    <button className='flex text-xs items-center bg-gray-100 text-gray-400 rounded-full px-2 py-1 gap-3'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span>Linkedin</span>
                    </button>
                    <button className='flex text-xs items-center bg-gray-100 text-gray-400 rounded-full px-2 py-1 gap-3'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>Facebook</span>
                    </button>
                </div>
            </div>
        </main>
    )
}