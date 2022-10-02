import { ReactElement, useRef, useState } from 'react'

import paths from 'navigation/paths'
import Head from 'next/head'

import useScript from 'hooks/useScript'

import Container from 'components/container'
import Layout from 'components/layout'

const Form = () => {
  useScript(
    'calendely',
    'https://assets.calendly.com/assets/external/widget.js'
  )
  const form = useRef<HTMLFormElement>(null)
  const [prev, setPrev] = useState<boolean>()
  const [success, setSuccess] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Formulario - Selfcommit.</title>
      </Head>
      <section className="py-16">
        <Container>
          <div className={success ? 'block' : 'hidden'}>
            <div>
              <h2 className="text-xl font-semibold leading-6 text-gray-900">
                Gracias por querer formar parte de Selfcommit!
              </h2>
              <p className="mt-1 text-sm text-gray-500 max-w-3xl">
                Ahora, si quieres agendar una cita, puedes hacerlo directamente
                desde esta pantalla.
              </p>
            </div>
            <div className="mt-8 border border-1 rounded-lg">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/selfcommit/30min?hide_gdpr_banner=1"
                style={{ minWidth: '100%', height: 850 }}
              />
            </div>
            <div className="mt-16 py-12 text-center text-2xl font-semibold">
              <a href={paths.discord} target="_blank">
                Únete a nuestra comunidad de{' '}
                <span className="text-primary hover:underline">Discord</span>.
              </a>
            </div>
          </div>
          <form
            ref={form}
            className={success ? 'hidden' : 'block'}
            onSubmit={async e => {
              e.preventDefault()
              const data = new FormData(form.current!)
              // console.log(JSON.stringify(Object.fromEntries(data)))
              const res = await fetch('/api/form', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  ...Object.fromEntries(data),
                  prev
                })
              })
              if (!res.ok) {
                // handle error
                return
              }
              setSuccess(true)
            }}
          >
            <div>
              <h2 className="text-xl font-semibold leading-6 text-gray-900">
                Formulario
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Ayudanos a tener una imagen mas clara de ti.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellidos
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico*
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Linkedin
                </label>
                <div className="mt-1">
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    placeholder="https://www.linkedin.com/in/josepvidalvidal/"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
            <fieldset className="mt-6">
              <legend className="block text-sm font-medium text-gray-700">
                ¿Estas trabajando actualmente como developer?
              </legend>
              <div className="flex mt-2 space-x-4">
                <div className="flex items-center">
                  <input
                    id="prev-yes"
                    name="prev"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    required
                    onChange={e =>
                      setPrev(e.currentTarget.checked ? true : false)
                    }
                  />
                  <label
                    htmlFor="prev-yes"
                    className="ml-3 block text-sm font-medium text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="prev-no"
                    name="prev"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    required
                    onChange={e =>
                      setPrev(e.currentTarget.checked ? false : true)
                    }
                  />
                  <label
                    htmlFor="prev-no"
                    className="ml-3 block text-sm font-medium text-gray-500"
                  >
                    No
                  </label>
                </div>
              </div>
            </fieldset>
            {prev === true && (
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ¿Cuantos años de experiencia tienes como developer?*
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="experience"
                      id="experience"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="dream"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ¿Cual es tu empleo soñado?*
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="dream"
                      id="dream"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            {prev !== undefined && (
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-5">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ¿Por que razón quieres formar parte de{' '}
                    <span className="text-primary">Selfcommit</span>?*
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="reason"
                      id="reason"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-gray-400"
                      placeholder="Para encontrar mi primer empleo..."
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            {prev !== undefined && (
              <div className="grid grid-cols-6 mt-12">
                <div className="col-span-6 md:col-span-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm"
                  >
                    Agendar reunión
                  </button>
                </div>
              </div>
            )}
          </form>
        </Container>
      </section>
    </>
  )
}

Form.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Form
