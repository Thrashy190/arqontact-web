'use client'

import { useState } from 'react';
import Image from 'next/image';
import { faEnvelope, faPhone, faArrowLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';

export default function Password() {
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
                    <span className='text-3xl text-amber-400 font-semibold'>3/3</span>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className='text-3xl font-normal'>¡Último paso!</h1>
                    <div className="flex flex-col gap-1">
                        <label className='font-medium' htmlFor="mail">Contraseña</label>
                        <input
                            className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                            type="text"
                            placeholder='correo@ejemplo.com'
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='font-medium' htmlFor="mail">Confirma tu contraseña</label>
                        <input
                            className="bg-gray-100 px-4 py-2 rounded-lg focus-visible:outline-gray-300"
                            type="text"
                            placeholder='correo@ejemplo.com'
                        />
                    </div>
                </div>
                <button onClick={() => router.push('/register/type')} className='py-2 font-semibold bg-amber-400 text-white rounded-xl uppercase'>
                    Terminar
                </button>
            </div>
        </main>
    )
}