'use client'

import { useState } from 'react';
import Image from 'next/image';
import { faEnvelope, faPhone, faArrowLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';

export default function Mail() {
    const [type, setType] = useState<string>('');
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
                <div className="flex flex-col gap-6">
                    <h1 className='text-3xl font-normal'>¿Quién eres?</h1>
                    <div onClick={() => setType('constructor')} className={`flex items-center rounded-md ${type == 'constructor' ? 'bg-amber-50 text-amber-400' : 'bg-gray-100'} gap-4 p-4 font-medium transition-all`}>
                        <input className="w-4 h-4 flex-shrink-0 bg-white" checked={type == 'constructor'} type="radio" name="constructor"/>
                        <div className={`flex flex-col ${ type == 'constructor' ? 'gap-2' : '' }`}>
                            <h2 className='font-semibold'>Constructor</h2>
                            <p className={`${ type == 'constructor' ? 'h-auto' : ''} h-0 overflow-hidden text-sm`}>Busco trabajo en obras. Poseo conocimientos prácticos para realizar labores manuales de construcción. </p>
                        </div>
                    </div>
                    <div onClick={() => setType('professional')} className={`flex items-center rounded-md ${type == 'professional' ? 'bg-amber-50 text-amber-400' : 'bg-gray-100'} gap-4 p-4 font-medium transition-all`}>
                        <input className="w-4 h-4 flex-shrink-0 bg-white" checked={type == 'professional'} type="radio" name="professional"/>
                        <div className={`flex flex-col ${ type == 'professional' ? 'gap-2' : '' }`}>
                            <h2 className='font-semibold'>Profesional</h2>
                            <p className={`${ type == 'professional' ? 'h-auto' : ''} h-0 overflow-hidden text-sm`}>Busco trabajo en obras. Poseo conocimientos prácticos para realizar labores manuales de construcción. </p>
                        </div>
                    </div>
                </div>
                <button onClick={() => router.push('/dashboard')} className={`py-2 font-semibold ${type != '' ? 'bg-amber-400 text-white' : 'bg-gray-100 text-gray-400'} rounded-xl uppercase transition-all`}>
                    Continuar
                </button>
            </div>
        </main>
    )
}