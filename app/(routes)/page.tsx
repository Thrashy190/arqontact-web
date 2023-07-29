import Image from 'next/image'
import { Switch, Target, If, InteractiveTrigger, AnimatedIf } from '../_helpers'
import { LandingIconText, RoadmapItem, FAQSection, Button, Navbar, FAQItem } from '../_components/landing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faImage, faUserCheck, faWifi, faProjectDiagram, faTrashAlt, faBell, faUser, faCogs, faQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faApple, faGooglePlay, faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main id="landing-page" className="w-full h-full relative bg-gray-100">
      <Navbar/>
      <section className='h-[calc(100vh-6rem)] relative flex items-center'>
        <div className="bg-white absolute z-10 w-full h-full" style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}></div>
        <div className="self-end right-0 bg-white absolute md:z-30 w-[60vw] h-[60%] xl:w-[55vw] xl:h-[55%]" style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}></div>
        <div className="white-gradient z-[25] absolute bottom-0 w-full h-24"></div>
        <div className="px-6 md:px-10 lg:px-28 w-full h-full flex items-center">
          <div className="w-full h-full z-[15] flex-1 grow flex flex-col justify-center items-center space-y-10">
            <h1 className="text-right xs:text-center md:text-right text-5xl font-semibold">Conecta con el personal adecuado. Sin esfuerzo.</h1>
            <div className="w-full text-right xs:text-center md:text-right text-3xl font-normal">Baja nuestra aplicación:</div>
            <div className="w-full flex flex-col space-y-6 xs:flex-row xs:space-y-0 xs:space-x-6 justify-center md:justify-end">
              <button className="transition-all hover:scale-110 self-end px-3.5 py-2.5 bg-amber-100 rounded-2xl justify-start items-center gap-5 inline-flex">
                <div className="relative bg-black bg-opacity-0">
                  <FontAwesomeIcon size='2x' className="text-amber-400" icon={faGooglePlay} />
                </div>
                <div className="text-amber-400 text-lg lg:text-2xl font-bold">Google Play</div>
              </button>
              <button className="transition-all hover:scale-110 self-end px-3.5 py-2.5 bg-amber-100 rounded-2xl justify-start items-center gap-5 inline-flex">
                <div className="relative bg-black bg-opacity-0">
                  <FontAwesomeIcon size='2x' className="text-amber-400" icon={faApple} />
                </div>
                <div className="text-amber-400 text-lg lg:text-2xl font-bold">App Store</div>
              </button>
            </div>
          </div>
          <div className="hidden md:flex relative h-full flex-1 grow justify-center items-center">
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
      <section id="us" className='flex flex-col space-y-12 md:space-y-0 md:flex-row flex-wrap text-gray-800 px-6 md:px-10 lg:px-28 py-12 md:py-20 bg-white'>
        <h1 className="w-full md:mb-8 font-semibold flex items-center">
          <div className="bg-white w-10 h-10 inline-flex justify-center items-center mr-4 rounded-full shadow-md p-5">
            <FontAwesomeIcon size="lg" className='text-amber-400' icon={faUser} />
          </div>
          <span className='text-3xl lg:text-5xl'>Nosotros</span>
        </h1>
        <div className="flex flex-1 grow">
          <div className="flex flex-col space-y-6">
            <p className='w-full text-xl lg:text-3xl font-normal'>Arqontact es una aplicación para que puedas conectar con personal para tu obra. Tenemos perfiles de obreros interesados en colaborar contigo.</p>
            <p className='w-full text-xl lg:text-3xl font-normal'>Con tan solo tu celular, podrás contactar con la gente indicada para tu proyecto.</p>
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
      <section className='relative flex flex-col text-gray-800 px-6 md:px-10 lg:px-28 py-12 md:py-24 bg-white'>
        <Switch target="table">
          <h1 className="w-full mb-16 text-center text-3xl lg:text-5xl font-semibold">Con Arqontact</h1>
          <div className="flex flex-wrap md:space-y-16 justify-center md:justify-between xl:items-center items-start">
            <div className="flex flex-col md:space-y-16">
              <InteractiveTrigger event="onClick" id="table" self="table" field="active">
                <LandingIconText icon={<FontAwesomeIcon  size='2x' className='text-amber-400' icon={faTable} />} description="Podrás organizar a la gente trabajando en tu proyecto." />
              </InteractiveTrigger>
              <InteractiveTrigger event="onClick" id="usercheck" self="usercheck" field="active">
                <LandingIconText icon={<FontAwesomeIcon size='2x' className='text-amber-400' icon={faUserCheck} />} description="Verás las reseñas del trabajador de otros arquitectos." />
              </InteractiveTrigger>
            </div>
            <div className="w-[250px] h-[490px] hidden md:flex xl:relative xl:top-0 sticky top-1/4">
              <Target field='condition' self="table">
                <AnimatedIf>
                  <Image
                    src='/organizer.jpg'
                    width={250}
                    height={490}
                    alt='organizer'
                    className={`absolute`}
                  />
                </AnimatedIf>
              </Target>
              <Target field='condition' self="usercheck">
                <AnimatedIf>
                  <Image
                    src='/reviews.jpg'
                    width={250}
                    height={490}
                    alt='reviews'
                    className={`absolute`}
                  />
                </AnimatedIf>
              </Target>
              <Target field='condition' self="image">
                <AnimatedIf>
                  <Image
                    src='/galleries.jpg'
                    width={250}
                    height={490}
                    alt='galleries'
                    className={`absolute`}
                  />
                </AnimatedIf>
              </Target>
              <Target field='condition' self="wifi">
                <AnimatedIf>
                  <Image
                    src='/map.jpg'
                    width={250}
                    height={490}
                    alt='map'
                    className={`absolute`}
                  />
                </AnimatedIf>
              </Target>
            </div>
            <div className="flex flex-col md:space-y-16">
              <InteractiveTrigger event="onClick" id="image" self="image" field="active">
                <LandingIconText icon={<FontAwesomeIcon size='2x' className='text-amber-400' icon={faImage} />} description="Verás como es el trabajo de los obreros." />
              </InteractiveTrigger>
              <InteractiveTrigger event="onClick" id="wifi" self="wifi" field="active">
                <LandingIconText icon={<FontAwesomeIcon size='2x' className='text-amber-400' icon={faWifi} />} description="No necesitarás moverte de donde estés." />
              </InteractiveTrigger>
            </div>
          </div>
        </Switch>
      </section>
      <section className="flex flex-col border-y-2 border-dashed border-gray-300 py-14 space-y-6 justify-center items-center bg-gray-100 px-6 md:px-10 lg:px-28">
        <Image
          src='/landing_server.svg'
          width={150}
          height={190}
          alt='profile'
        />
        <div className="bg-white rounded-md px-10 py-8 flex flex-col space-y-5">
          <p className='w-auto lg:w-[600px] text-center text-2xl lg:text-3xl font-semibold'>Ten acceso a la base de datos de obreros más grande de <span className='text-amber-400'>México</span>.</p>
          <button className='transition-all hover:scale-110 w-auto self-center bg-amber-100 text-amber-400 rounded-xl px-6 py-4 text-xl lg:text-2xl'>Empieza gratis</button>
        </div>
      </section>
      <section id="how-it-works" className='flex flex-col relative justify-center items-center text-gray-800 px-6 md:px-10 lg:px-28 py-12 md:py-20 bg-white'>
        <h1 className="w-full text-center lg:text-start mb-8 md:mb-20 font-semibold flex justify-center items-center">
          <div className="bg-white w-10 h-10 inline-flex justify-center items-center mr-4 rounded-full shadow-md p-5">
            <FontAwesomeIcon size="lg" className='text-amber-400' icon={faCogs} />
          </div>
          <span className='text-3xl lg:text-5xl'>¿Cómo funciona?</span>
        </h1>
        <div className="w-full flex justify-center space-y-36 lg:space-y-0 lg:justify-between">
          <div className="lg:w-80 flex flex-col justify-center lg:justify-between">
            <RoadmapItem right={false}>
              <h2 className='text-center lg:text-end font-semibold text-xl lg:text-3xl'>Genera tu cuenta</h2>
              <div className="flex items-center lg:items-start flex-col space-y-5">
                <div className="w-full flex flex-col text-gray-800 space-y-2">
                  <label htmlFor="name" className='text-lg'>Nombre (s)</label>
                  <div className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 text-gray-400'>
                    Juan José
                  </div>
                </div>
                <div className='self-center bg-amber-400 font-medium px-4 py-2 text-white rounded-md uppercase'>Continuar registro</div>
              </div>
            </RoadmapItem>
            <div className="lg:hidden flex justify-center h-16 md:h-32">
              <svg height="100%" width="100%" viewBox='0 0 100 100' preserveAspectRatio="none">
                <path vectorEffect="non-scaling-stroke" className='stroke-gray-300 fill-none' strokeWidth="18" strokeLinecap="round" strokeDasharray={'4,24'} d="M50 5L50 95" />
              </svg>
            </div>
            <RoadmapItem classes="block lg:hidden" right={true}>
              <h2 className='text-center font-semibold text-xl lg:text-3xl'>Crea un proyecto</h2>
              <div className="flex justify-center lg:justify-start items-start space-x-14">
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <h3 className='text-lg font-medium'>Puente San José</h3>
                    <p className='text-lg text-gray-600'>Querétaro, QRO.</p>
                  </div>
                  <div className="w-6 h-6 mt-1 bg-lime-200 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                  </div>
                </div>
                <div className="self-center flex justify-center items-center">
                  <div className="bg-amber-100 text-amber-400 rounded-md p-3 flex items-center">
                    <FontAwesomeIcon size='lg' className="text-amber-400" icon={faProjectDiagram} />
                  </div>
                </div>
              </div>
            </RoadmapItem>
            <div className="lg:hidden flex justify-center h-16 md:h-32">
              <svg height="100%" width="100%" viewBox='0 0 100 100' preserveAspectRatio="none">
                <path vectorEffect="non-scaling-stroke" className='stroke-gray-300 fill-none' strokeWidth="18" strokeLinecap="round" strokeDasharray={'4,24'} d="M50 5L50 95" />
              </svg>
            </div>
            <RoadmapItem right={false}>
              <h2 className='text-center lg:text-end font-semibold text-xl lg:text-3xl'>Publica tus vacantes</h2>
              <div className="flex justify-center lg:justify-start text-gray-800 space-x-5 items-center">
                <h2 className='text-lg'>Carpintero</h2>
                <div className='w-12 flex items-center justify-center text-lg rounded-md h-10 border-0 bg-gray-100 text-gray-400'>
                  50
                </div>
                <div className="w-6 h-6 bg-lime-200 rounded-full flex justify-center items-center">
                  <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                </div>
                <div className='flex justify-center items-center'>
                  <FontAwesomeIcon size='lg' className="text-gray-400" icon={faTrashAlt} />
                </div>
              </div>
            </RoadmapItem>
            <div className="lg:hidden flex justify-center h-16 md:h-32">
              <svg height="100%" width="100%" viewBox='0 0 100 100' preserveAspectRatio="none">
                <path vectorEffect="non-scaling-stroke" className='stroke-gray-300 fill-none' strokeWidth="18" strokeLinecap="round" strokeDasharray={'4,24'} d="M50 5L50 95" />
              </svg>
            </div>
            <RoadmapItem classes="block lg:hidden" right={true}>
              <h2 className='text-center font-semibold text-xl lg:text-3xl'>Recibe personas para el puesto</h2>
              <div className="flex justify-center text-gray-800 space-x-3 items-center">
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
                  <FontAwesomeIcon size='lg' className="text-amber-400" icon={faBell} />
                </div>
              </div>
            </RoadmapItem>
          </div>
          <div className="hidden lg:flex relative m-16 w-full flex-1 grow flex-col justify-between">
            <div className="absolute w-full h-full">
              <svg height="100%" width="100%" viewBox='0 0 100 100' preserveAspectRatio="none">
                <path vectorEffect="non-scaling-stroke" className='stroke-gray-300 fill-none' strokeWidth="18" strokeLinecap="round" strokeDasharray={'36,36'} d="M5 5L93 5L5 93L93 93" />
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
          <div className="hidden lg:flex w-80 flex-col space-y-36 justify-between">
            <RoadmapItem right={true}>
              <h2 className='text-start font-semibold text-3xl'>Crea un proyecto</h2>
              <div className="flex justify-center lg:justify-start items-start space-x-4">
                <div className="flex space-x-4">
                  <div className="flex flex-col">
                    <h3 className='text-lg font-medium'>Puente San José</h3>
                    <p className='text-lg text-gray-600'>Querétaro, QRO.</p>
                  </div>
                  <div className="w-6 h-6 mt-1 bg-lime-200 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-amber-100 text-amber-400 rounded-md p-3 flex items-center">
                    <FontAwesomeIcon size='lg' className=" text-amber-400" icon={faProjectDiagram} />
                  </div>
                </div>
              </div>
            </RoadmapItem>
            <RoadmapItem right={true}>
              <h2 className='text-start font-semibold text-3xl'>Recibe personas para el puesto</h2>
              <div className="flex justify-center lg:justify-start text-gray-800 space-x-3 items-center">
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
                  <FontAwesomeIcon  size='lg' className="text-amber-400" icon={faBell} />
                </div>
              </div>
            </RoadmapItem>
          </div>
        </div>
      </section>
      <section id="faq" className="flex flex-col justify-center items-center border-y-2 border-dashed border-gray-300 bg-gray-100 px-6 md:px-10 lg:px-28 py-12 md:py-28">
        <h1 className="w-full text-center mb-8 md:mb-20 font-semibold flex justify-center items-center">
          <div className="bg-white w-10 h-10 inline-flex justify-center items-center mr-4 rounded-full shadow-md p-5">
            <FontAwesomeIcon size="lg" className='text-amber-400' icon={faQuestion} />
          </div>
          <span className='text-3xl lg:text-5xl'>Preguntas frecuentes</span></h1>
        <div className="w-full sm:w-auto flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-6">
        <Switch target={0} >
          <div className="w-full sm:w-auto pb-2 flex-nowrap overflow-x-auto flex space-x-4 md:space-x-0 md:flex-col md:space-y-4">
              <InteractiveTrigger event="onClick" id={0} self={0} field="active">
                <Button>Aplicación</Button>
              </InteractiveTrigger>
              <InteractiveTrigger event="onClick" id={1} self={1} field="active">
                <Button>Suscripciones</Button>
              </InteractiveTrigger>
              <InteractiveTrigger event="onClick" id={2} self={2} field="active">
                <Button>Servicios</Button>
              </InteractiveTrigger>
          </div>
          <FAQSection>
            <Target field='condition' self={0}>
              <If>
                  <FAQItem question="¿Cuando saldrá la aplicación al mercado?" answer="Se planea que la aplicación salga la luz a más tardar en Enero 2024, listos para iniciar un nuevo año con todo."/>
                  <FAQItem question="Aplicación" answer="ola"/>
                  <FAQItem question="Aplicación" answer="ola"/>
              </If>
            </Target>
            <Target field='condition' self={1}>
              <If>
                  <FAQItem question="¿Cuáles son las suscripciones que manejan?" answer="Por el momento, solo mantendremos un producto, el poder posicionar mejor tus tableros en relación a otros en la plataforma."/>
                  <FAQItem question="Suscripciones" answer="ola"/>
                  <FAQItem question="Suscripciones" answer="ola"/>
              </If>
            </Target>
            <Target field='condition' self={2}>
              <If>
                  <FAQItem question="¿Cuál es el precio de los servicios?" answer="Nuestros servicios son gratuitos hasta cierto punto, solamente tendrás que pagar para acceder a algunas funcionalidades."/>
                  <FAQItem question="Servicios" answer="ola"/>
                  <FAQItem question="Servicios" answer="ola"/>
              </If>
            </Target>
          </FAQSection>
        </Switch>
        </div>
      </section>
      <section id="contact" className="flex flex-col justify-center items-center bg-white px-6 md:px-10 lg:px-28 py-12 md:py-28">
        <div className="w-full flex flex-col lg:flex-row items-center space-y-16 lg:space-y-0 md:space-x-8 text-gray-800">
          <div className="flex w-full lg:w-96 flex-col space-y-8">
            <h1 className="w-full font-semibold flex items-center">
              <div className="bg-white w-10 h-10 inline-flex justify-center items-center mr-4 rounded-full shadow-md p-5">
                <FontAwesomeIcon size="lg" className='text-amber-400' icon={faEnvelope} />
              </div>
              <span className='text-3xl lg:text-5xl'>Contacto</span>
            </h1>
            <p className='text-xl lg:text-2xl'>
              ¿Aún tienes dudas? Contáctanos y te responderemos lo más rápido que podamos.
            </p>
            <div className="flex justify-around sm:justify-start sm:space-x-10">
              <div className='transition-all hover:scale-110'><FontAwesomeIcon size="3x" className="text-amber-400" icon={faFacebook} /></div>
              <div className='transition-all hover:scale-110'><FontAwesomeIcon size="3x" className="text-amber-400" icon={faLinkedin} /></div>
              <div className='transition-all hover:scale-110'><FontAwesomeIcon size="3x" className="text-amber-400" icon={faTwitter} /></div>
              <div className='transition-all hover:scale-110'><FontAwesomeIcon size="3x" className="text-amber-400" icon={faInstagram} /></div>
            </div>
          </div>
          <form action="https://formsubmit.co/contact@arqontact.com" method="POST" encType='multipart/form-data' className="flex w-full lg:w-auto flex-1 grow flex-col space-y-5">
            <div className="w-auto flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="name" className='text-lg font-medium'>Nombre (s)</label>
                <input required name="name" className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 placeholder-gray-400 text-gray-800' placeholder="José Cruz Aguirre" />
              </div>
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="email" className='text-lg font-medium'>Email</label>
                <input required name="email" className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 placeholder-gray-400 text-gray-800' placeholder="jjcagmail.com" />
              </div>
            </div>
            {/* <div className="w-auto flex space-x-10">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="subject" className='text-lg font-medium'>Asunto</label>
                <input required name="subject" className='text-lg flex items-center rounded-md pl-4 h-10 border-0 bg-gray-100 placeholder-gray-400 text-gray-800'/>
              </div>
            </div> */}
            <div className="w-auto flex space-x-10">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="message" className='text-lg font-medium'>Mensaje</label>
                <textarea required name="message" className='text-lg flex items-center rounded-md p-4 h-40 border-0 bg-gray-100 placeholder-gray-400 text-gray-800' />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className='bg-amber-400 font-medium px-4 py-2 text-white rounded-md uppercase'>ENVIAR</button>
            </div>
          </form>
        </div>
      </section>
      <footer className='bg-gray-800 flex items-center h-24 w-full px-6 md:px-10 lg:px-28'>
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
