import { ReactElement } from 'react'

import paths from 'navigation/paths'
import Head from 'next/head'
import Link from 'next/link'
import { BsDiscord } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'

import Container from 'components/container'
import Layout from 'components/layout'
import Splash from 'components/pages/index/splash'

const Home = () => {
  return (
    <>
      <Head>
        <title>Selfcommit.</title>
      </Head>
      <Splash />
      <div className="bg-gradient-to-b from-gray-900 h-16 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="rotate-180"
        >
          <polygon points="100 0 100 10 0 10" />
        </svg>
      </div>
      <div className="pt-32 space-y-24 mt-16">
        <section>
          <Container>
            <div>
              <h2 className="font-bold text-3xl text-center">
                ¿Quieres encontrar un{' '}
                <span className="text-primary">mejor empleo</span>?
              </h2>
              <p className="text-gray-700 mt-4 text-sm text-center">
                Estamos seguros que <strong>tienes un gran talento</strong>,
                pero te sorprendería lo mal que las personas solemos vendernos
                para captar la atención de una empresa. Por eso{' '}
                <strong>
                  queremos ayudarte a incrementar tus probabilidades de
                  conseguir tus objetivos salariales y profesionales
                </strong>
                .
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-12">
              <div>
                <h2 className="font-bold text-lg">¿Cómo te ayudaremos?</h2>
                <p className="text-gray-gray-700 mt-4 text-sm ">
                  <strong>1.</strong> Agenda y reúnete gratuitamente con uno de
                  nuestros desarrolladores expertos para escuchar tus
                  necesidades y darte algunos tips para empezar.
                </p>
                <p className="text-gray-gray-700 mt-4 text-sm ">
                  <strong>2.</strong> Si te hemos aportado valor hasta el
                  momento y quieres continuar con nuestras sesiones de coaching,
                  tan solo tendrás que agendar una nueva reunión.
                </p>
                <p className="text-gray-gray-700 mt-4 text-sm ">
                  <strong>3.</strong> De igual manera te aportaremos material
                  que te ayudará a saber qué hacer con mayor presición. ¡Únete a
                  nuestra comunidad donde tu coach y la comunidad podrán
                  resolver cualquier duda que tengas!
                </p>
              </div>
              <div className="text-gray-gray-700 flex items-center justify-center">
                <Link href={paths.form} passHref>
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-primary bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm">
                    Reunirme con un mentor
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-slate-800 py-32">
          <Container>
            <div>
              <h2 className="text-white font-bold text-3xl text-center">
                ¿Quieres crecer dentro de la{' '}
                <span className="text-primary"> empresa que trabajas</span>?
              </h2>
              <p className="text-gray-100 mt-4 text-sm text-center">
                Muchas veces para crecer dentro de una empresa no es cuestión de
                inventar la rueda. Pequeños cambios podrán ayudarte a lograr un
                mayor impacto y aumentar tu calidad como desarrollador. Queremos{' '}
                <strong>
                  ayudarte a detectar esos pequeños puntos de mejora que te
                  llevarán a tu objetivo
                </strong>
                .
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-12">
              <div className="text-gray-gray-700 flex items-center justify-center">
                <Link href={paths.form} passHref>
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-primary to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm">
                    Unirme a la comunidad
                  </a>
                </Link>
              </div>
              <div className="text-white">
                <h2 className="font-bold text-lg">¿Cómo te ayudaremos?</h2>
                <p className="text-gray-gray-700 mt-4 text-sm relative">
                  <strong>1.</strong> Únete a nuestra comunidad de discord.
                </p>
                <p className="text-gray-gray-700 mt-4 text-sm ">
                  <strong>2.</strong> Escribenos en el chat privado que estás
                  interesado en desarrollarte más en tu empresa actual.
                </p>
                <p className="text-gray-gray-700 mt-4 text-sm ">
                  <strong>3.</strong> Te haremos algunas preguntas y empezaremos
                  a ¡Guiarte hacia la luna!
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section id="community" className="py-16">
          <a href={paths.discord} target="_blank">
            <Container
              alt="Go To Discord"
              className="relative bg-slate-300 border border-gray-200 rounded-lg px-16 py-8 hover:rotate-1 transition-all duration-300"
            >
              <div className="absolute flex items-center justify-center rounded-full top-2 right-2 sm:-top-5 sm:-right-5 bg-slate-700 p-4 shadow-lg">
                <BsDiscord className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800 text-xl max-w-4xl">
                  Conécta con nuestra comunidad y siéntete acompañado en tu
                  proceso de crecimiento
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-500 rounded-lg p-4 space-y-3">
                    <p className="text-white font-bold">
                      Nuestra misión espacial
                    </p>
                    <p className="text-gray-100 text-sm">
                      Que juntos podamos seguir creciendo a nivel profesional y
                      personal compartiendo nuestros conocimientos y
                      experiencias.
                    </p>
                  </div>
                  <div className="bg-slate-500 rounded-lg p-4 space-y-3">
                    <p className="text-white font-bold">
                      Nuestro protocolo de despegue exitoso
                    </p>
                    <p className="text-gray-100 text-sm">
                      - PR, no de Pull Request sino de Pasión y Reto. <br /> -
                      Mergear solo contenido basado en respeto.
                      <br /> - Conectar con nuestra API: Aprendizaje continuo,
                      Perseverancia e Integridad.
                    </p>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-white bg-origin-border px-4 py-2 font-medium shadow-sm">
                  Unirme a la comunidad
                </button>
              </div>
            </Container>
          </a>
        </section>
        <section id="pricing" className="bg-gray-50">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                  Pricing
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-slate-800 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50" />
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                  <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl sm:tracking-tight">
                      Empieza ya a mejorar tu carrera
                    </h3>
                    <p className="mt-6 text-base text-gray-500">
                      Sin coste, empieza a formar parte de Selfcommit agendando
                      una reunión con nuestros developers.
                    </p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                          Que incluye
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                      >
                        {[
                          'Test de nivel de visibilidad',
                          'Primera reunion con tu mentor'
                        ].map(feature => (
                          <li
                            key={feature}
                            className="flex items-start lg:col-span-1"
                          >
                            <div className="flex-shrink-0">
                              <FaCheckCircle
                                className="h-5 w-5 text-green-400"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm text-gray-700">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg font-medium leading-6 text-gray-900">
                      Primera sessión
                    </p>
                    <div className="mt-4 flex items-center justify-center text-4xl font-bold tracking-tight text-gray-900">
                      <span>Gratis</span>
                    </div>
                    <p className="mt-4 text-sm">
                      <a
                        href="#"
                        className="font-medium text-gray-500 underline"
                      >
                        Aprende mas sobre nuestra politica para miembros
                      </a>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-sm border border-transparent bg-origin-border bg-primary px-4 py-2 text-base font-medium text-white shadow-sm"
                        >
                          Empezar Ya
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
