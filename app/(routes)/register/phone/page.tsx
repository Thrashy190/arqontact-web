'use client'

import { useState } from 'react';
import Image from 'next/image';
import { faEnvelope, faPhone, faArrowLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';

export default function Phone() {
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const router = useRouter();

    return (
        <main className="w-full h-screen pb-16 gap-10 flex flex-col justify-between py-4 px-8 relative">
            <div className="flex flex-row-reverse">
                <Image
                    className='inline'
                    src="/logo_light.svg"
                    width={135}
                    height={25}
                    alt="logo"
                />
            </div>
            <div className="flex flex-col flex-grow self-stretch justify-between">
                <div className="flex justify-between items-center text-3xl text-amber-400 font-semibold">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className='text-3xl text-amber-400 font-semibold'>2/3</span>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className='text-3xl font-normal'>Contacto</h1>
                    {
                        !codeSent ? <div className="flex items-center gap-6 rounded-md bg-amber-50 text-amber-400 p-6">
                            <span className='text-2xl'>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                            </span>
                            <h2 className='font-medium'>Será el teléfono con el que podrán contactarte los demás usuarios.</h2>
                        </div> : <div className="flex items-center gap-6 rounded-md bg-amber-50 text-amber-400 p-6">
                            <h2 className='font-medium'>Enviamos un código a tu correo. Por favor, escríbelo.</h2>
                        </div>
                    }
                    {
                        !codeSent ? <div className="flex flex-col gap-1">
                            <label className='font-medium' htmlFor="mail">Teléfono</label>
                            <input
                                className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                                type="text"
                                placeholder='correo@ejemplo.com'
                            />
                        </div> : <div className="flex flex-col gap-1">
                            <label className='font-medium' htmlFor="code">Código</label>
                            <div className="flex justify-between gap-6">
                                <input
                                    className="w-full text-center bg-gray-100 p-4 text-xl rounded-lg focus-visible:outline-gray-300"
                                    type="text"
                                    placeholder='0'
                                />
                                <input
                                    className="w-full text-center bg-gray-100 p-4 text-xl rounded-lg focus-visible:outline-gray-300"
                                    type="text"
                                    placeholder='0'
                                />
                                <input
                                    className="w-full text-center bg-gray-100 p-4 text-xl rounded-lg focus-visible:outline-gray-300"
                                    type="text"
                                    placeholder='0'
                                />
                                <input
                                    className="w-full text-center bg-gray-100 p-4 text-xl rounded-lg focus-visible:outline-gray-300"
                                    type="text"
                                    placeholder='0'
                                />
                            </div>
                        </div>
                    }
                </div>
                <button onClick={() => codeSent ? router.push('/register/password') : setCodeSent(true)} className='py-2 font-semibold bg-amber-400 text-white rounded-xl uppercase'>
                    { codeSent ? 'Confirmar' : 'Continuar' }
                </button>
            </div>
        </main>
    )
}