import Image from 'next/image'
import { LandingIconText, RoadmapElement, FAQItem } from './src/landing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faImage, faUserCheck, faWifi, faProjectDiagram, faTrashAlt, faBell } from '@fortawesome/free-solid-svg-icons'
import { faApple, faGooglePlay, faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="w-full h-full relative bg-gray-100">
      <nav className="w-full z-[100] h-24 bg-white shadow-sm px-28 sticky flex justify-between top-0">
        <Image
          className='inline'
          src="/logo_light.svg"
          width={210}
          height={40}
          alt="logo"
        />
        <div className="flex justify-start items-center gap-12 text-gray-800">
          <div className="w-auto text-2xl font-normal">Nosotros</div>
          <div className="w-auto text-2xl font-normal">Como funciona</div>
          <div className="w-auto text-2xl font-normal">FAQ</div>
          <div className="w-auto text-2xl font-normal">Contacto</div>
        </div>
      </nav>
      <section className='h-[calc(100vh-6rem)] relative flex items-center'>
        <div className="bg-white absolute z-10 w-full h-full" style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)"}}></div>
        <div className="self-end right-0 bg-white absolute z-30 w-[50vw] h-1/2" style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)"}}></div>
        <div className="white-gradient z-[25] absolute bottom-0 w-full h-24"></div>
        <div className="px-28 w-full h-full flex items-center">
        <div className="w-full h-full z-[15] flex-1 grow flex flex-col justify-center items-center space-y-10">
          <h1 className="text-right text-5xl font-semibold">Conecta con el personal adecuado. Sin esfuerzo.</h1>
          <div className="w-full text-right text-3xl font-normal">Baja nuestra aplicación:</div>
          <div className="w-full flex justify-between">
            <button className="px-3.5 py-2.5 bg-amber-100 rounded-2xl justify-start items-center gap-5 inline-flex">
              <div className="w-11 h-11 relative bg-black bg-opacity-0">
                <FontAwesomeIcon className="w-11 h-11 text-amber-400" icon={faGooglePlay}/>
              </div>
              <div className="text-amber-400 text-2xl font-bold">Google Play</div>
            </button>
            <button className="px-3.5 py-2.5 bg-amber-100 rounded-2xl justify-start items-center gap-5 inline-flex">
              <div className="w-11 h-11 relative bg-black bg-opacity-0">
                <FontAwesomeIcon className="w-11 h-11 text-amber-400" icon={faApple}/>
              </div>
              <div className="text-amber-400 text-2xl font-bold">App Store</div>
            </button>
          </div>
        </div>
        <div className="relative flex h-full flex-1 grow justify-center items-center">
          <div className="z-[5] absolute w-96 h-96 bg-amber-400 rounded-full"></div>
          <Image
            className='absolute z-20'
            src="/worker.png"
            width={525}
            height={60}
            alt="worker-cover"
          />
        </div>
        </div>
      </section>
      <section className='flex flex-wrap text-gray-800 px-28 py-20 bg-white'>
        <h1 className="w-full mb-8 text-5xl font-semibold">Nosotros</h1>
        <div className="flex flex-1 grow">
          <div className="flex flex-col space-y-6">
            <p className='w-full text-3xl font-normal'>Arqontact es una aplicación para que puedas conectar con personal para tu obra. Tenemos perfiles de obreros interesados en colaborar contigo.</p>
            <p className='w-full text-3xl font-normal'>Con tan solo tu celular, podrás contactar con la gente indicada para tu proyecto.</p>
          </div>
        </div>
        <div className="flex flex-1 grow items-center justify-center">
          <Image
            src='/landing_profile.svg'
            width={400}
            height={225}
            alt='profile'
          />
        </div>
      </section>
      <section className='flex flex-wrap justify-between lg:items-center items-start text-gray-800 px-28 py-24 bg-white'>
        <h1 className="w-full mb-16 text-center text-5xl font-semibold">Con Arqontact</h1>
        <div className="flex flex-col space-y-16">
          <LandingIconText icon={<FontAwesomeIcon className='w-10 h-10 text-amber-400' icon={faTable}/>} description="Podrás organizar a la gente trabajando en tu proyecto."/>
          <LandingIconText icon={<FontAwesomeIcon className='w-10 h-10 text-amber-400' icon={faUserCheck}/>} description="Verás las reseñas del trabajador de otros arquitectos."/>
        </div>
        <div className="flex lg:relative lg:top-0 sticky top-28">
          <Image
            src='/phone_map.png'
            width={250}
            height={490}
            alt='profile'
          />
        </div>
        <div className="flex flex-col space-y-16">
          <LandingIconText icon={<FontAwesomeIcon className='w-10 h-10 text-amber-400' icon={faImage}/>} description="Verás como es el trabajo de los obreros."/>
          <LandingIconText icon={<FontAwesomeIcon className='w-10 h-10 text-amber-400' icon={faWifi}/>} description="No necesitarás moverte de donde estés."/>
        </div>
      </section>
      <section className="flex flex-col py-14 space-y-6 justify-center items-center bg-gray-100">
          <Image
            src='/landing_server.svg'
            width={150}
            height={190}
            alt='profile'
          />
          <div className="bg-white rounded-md px-10 py-8 flex flex-col space-y-5">
            <p className='w-[600px] text-center text-3xl font-semibold'>Ten acceso a la base de datos de obreros más grande de México.</p>
            <button className='w-auto self-center bg-amber-100 text-amber-400 rounded-xl px-6 py-4 text-3xl'>Empieza gratis</button>
          </div>
      </section>
      <section className='flex flex-col relative justify-center items-center text-gray-800 px-28 py-20 bg-white'>
        <h1 className="w-full mb-20 text-5xl font-semibold">¿Cómo funciona?</h1>
        
        <div className="w-full flex justify-between">
          <div className="flex flex-col space-y-36 justify-between">
            <RoadmapElement right="true">
              <h2 className='font-semibold text-3xl'>Genera tu cuenta</h2>
              <div className="flex items-start space-x-14 p-8">
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <h3 className='text-lg'>Hospital San Felipe</h3>
                    <p className='text-lg text-gray-600'>Querétaro, QRO.</p>
                  </div>
                  <div className="w-6 h-6 mt-1 bg-lime-200 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-amber-100 text-amber-400 rounded-md p-3 flex items-center">
                    <FontAwesomeIcon className="w-6 h-6 text-amber-400" icon={faProjectDiagram}/>
                  </div>
                </div>
              </div>
            </RoadmapElement>
            <RoadmapElement right="true">
              <h2 className='font-semibold text-3xl'>Publica tus vacantes</h2>
              <div className="flex text-gray-800 p-8 space-x-5 items-center">
                <h2 className='text-lg'>Carpintero</h2>
                <p className='text-xs text-gray-400 tex'>Cantidad</p>
                <div className='w-12 flex items-center justify-center text-lg rounded-md h-10 border-0 bg-gray-100 text-gray-400'>
                  50
                </div>
                <div className="w-6 h-6 bg-lime-200 rounded-full flex justify-center items-center">
                  <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                </div>
                <div className='flex justify-center items-center'>
                  <FontAwesomeIcon className="w-6 h-6 text-gray-400" icon={faTrashAlt}/>
                </div>
              </div>
            </RoadmapElement>
          </div>
          <div className="relative m-16 w-full flex-1 grow flex flex-col justify-between">
            <div className="absolute w-full h-full">
              <svg height="100%" width="100%" viewBox='0 0 100 100' preserveAspectRatio="none"> 
                <path vectorEffect="non-scaling-stroke" className='stroke-gray-300 fill-none' strokeWidth="18" strokeLinecap="round" strokeDasharray={'36,36'} d="M5 5L93 5L5 93L93 93"/>
              </svg>
            </div>
            <div className="absolute top-0 left-0 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
                <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
            </div>
            <div className="absolute top-0 right-0 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
                <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
                <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center">
                <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col space-y-36 justify-between">
            <RoadmapElement left="true">
              <h2 className='font-semibold text-3xl'>Crea un proyecto</h2>
              <div className="flex flex-col space-y-5 p-8">
                <div className="flex flex-col text-gray-800 space-y-2">
                  <label htmlFor="name" className='text-lg'>Nombre (s)</label>
                  <div className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 text-gray-400'>
                    Juan José
                  </div>
                </div>
                <div className='bg-amber-400 font-medium px-4 py-2 text-white rounded-md uppercase'>Continuar registro</div>
              </div>
            </RoadmapElement>
            <RoadmapElement left="true">
              <h2 className='font-semibold text-3xl'>Recibe personas para el puesto</h2>
              <div className="flex text-gray-800 p-8 space-x-3 items-center">
                <div className="flex -space-x-8">
                  <div className="w-16 h-16 overflow-hidden object-cover rounded-full border-4 border-white">
                    <Image
                      src="/oz.jpg"
                      width="100"
                      height="100"
                      alt='worker1'
                    />
                  </div>
                  <div className="w-16 h-16 overflow-hidden object-cover rounded-full border-4 border-white">
                    <Image
                      src="/maik.jpg"
                      width="100"
                      height="100"
                      alt='worker1'
                    />
                  </div>
                  <div className="w-16 h-16 overflow-hidden object-cover rounded-full border-4 border-white">
                    <Image
                      src="/mockey.jpg"
                      width="100"
                      height="100"
                      alt='worker1'
                    />
                  </div>
                </div>
                <div className="bg-amber-100 text-amber-400 px-2 py-1 rounded-md flex items-center space-x-2">
                  <span>+5</span>
                  <FontAwesomeIcon className="w-5 h-5 text-amber-400" icon={faBell}/>
                </div>
              </div>
            </RoadmapElement>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-28 py-28">
        <h1 className="w-full mb-20 text-5xl font-semibold">Preguntas frecuentes</h1>
        <div className="flex space-x-6">
          <div className="flex flex-col space-y-4">
            <div className="bg-amber-100 text-xl text-amber-400 self-start font-medium px-4 py-1 rounded-md">Aplicación</div>
            <div className="bg-white text-xl text-gray-800 self-start font-medium px-4 py-1 rounded-md">Suscripciones</div>
            <div className="bg-white text-xl text-gray-800 self-start font-medium px-4 py-1 rounded-md">Servicios</div>
          </div>
          <div className="flex flex-col divide-y divide-gray-200 text-gray-800 flex-1 grow bg-white rounded-md px-5">
            <FAQItem/>
            <FAQItem/>
            <FAQItem/>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-white px-28 py-28">
        <div className="flex items-center space-x-8 text-gray-800">
          <div className="flex w-96 flex-col space-y-8">
            <h1 className="w-full text-5xl font-semibold">Contacto</h1>
            <p className='text-4xl'>
              ¿Aún tienes dudas? Contáctanos y te responderemos lo más rápido que podamos.
            </p>
            <div className="flex space-x-10">
              <FontAwesomeIcon className="w-10 h-10 text-amber-400" icon={faFacebook}/>
              <FontAwesomeIcon className="w-10 h-10 text-amber-400" icon={faLinkedin}/>
              <FontAwesomeIcon className="w-10 h-10 text-amber-400" icon={faTwitter}/>
              <FontAwesomeIcon className="w-10 h-10 text-amber-400" icon={faInstagram}/>
            </div>
          </div>
          <div className="flex flex-1 grow flex-col space-y-5">
            <div className="w-full flex space-x-10">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="name" className='text-lg font-medium'>Nombre (s)</label>
                <input className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 placeholder-gray-400 text-gray-800' placeholder="José Cruz Aguirre"/>
              </div>
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="email" className='text-lg font-medium'>Email</label>
                <input className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 placeholder-gray-400 text-gray-800' placeholder="jjcagmail.com"/>
              </div>
            </div>
            <div className="w-full flex space-x-10">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="subject" className='text-lg font-medium'>Asunto</label>
                <input className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 placeholder-gray-400 text-gray-800'/>
              </div>
            </div>
            <div className="w-full flex space-x-10">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="message" className='text-lg font-medium'>Mensaje</label>
                <textarea className='text-lg flex items-center rounded-md p-4 h-40 border-0 bg-gray-100 placeholder-gray-400 text-gray-800' />
              </div>
            </div>
            <div className="flex justify-end">
              <button className='bg-amber-400 font-medium px-4 py-2 text-white rounded-md uppercase'>ENVIAR</button>
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-gray-800 flex items-center h-24 w-full px-28'>
        <Image
          className='inline'
          src="/logo_dark.svg"
          width={210}
          height={40}
          alt="logo"
        />
      </footer>
    </main>
  )
}
