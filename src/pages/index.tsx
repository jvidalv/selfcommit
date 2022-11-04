import { ReactElement, useRef, useState } from 'react'

import { discordLink, linkedinLink } from 'navigation/constants'
import Head from 'next/head'

import Container from 'components/container'
import Layout from 'components/layout'

const Home = () => {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Selfcommit.</title>
      </Head>
      <Container className="mt-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl text-white font-bold">
            <span className="text-primary animate-pulse">Developer</span>,
            comprométete con tu{' '}
            <span className="text-primary">desarrollo profesional</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Nuestro framework analiza tus aptitudes, experiencia y marca
            personal, y lo potencia para que incrementes las posibilidades de
            alcanzar tus{' '}
            <span className="text-gray-200">objetivos profesionales</span>.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={async e => {
            e.preventDefault()
            setLoading(true)
            const data = new FormData(form.current!)
            const res = await fetch('/api/email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ...Object.fromEntries(data)
              })
            })
            if (!res.ok) {
              setLoading(false)

              // handle error
              return
            }
            setSuccess(true)
            setLoading(false)
          }}
        >
          <div className="w-full max-w-2xl mt-8">
            {success ? (
              <>
                <h3 className="text-sm text-gray-300">
                  ¡Grácias por tu interés! Nos pondremos en contacto contigo lo
                  más pronto posible.
                </h3>
                <div className="mt-2 text-center">
                  <a
                    className="text-primary text-sm"
                    href={discordLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unirme a discord
                  </a>{' '}
                  <span className="text-gray-700 mr-3">|</span>
                  <a
                    className="text-primary text-sm"
                    href={linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Seguir en Linkedin
                  </a>{' '}
                </div>
              </>
            ) : (
              <>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-200 sr-only"
                >
                  Correo electrónico
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="bg-black border-gray-900 w-full text-xl text-white border-primary focus:border-primary"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <button className="bg-gray-600 text-gray-300 text-xl w-full hover:bg-primary transition px-2 py-1 mt-4">
                  Empezar {loading && '...'}
                </button>
              </>
            )}
          </div>
        </form>
      </Container>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
