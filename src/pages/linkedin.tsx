import { ReactElement, useRef, useState } from 'react'

import { discordLink, linkedinLink } from 'navigation/constants'
import Head from 'next/head'

import Container from 'components/container'
import Layout from 'components/layout'

const LinkedinPage = () => {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>Linkedin - Selfcommit.</title>
      </Head>
      <Container className="mt-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl text-white font-bold">
            <span className="text-primary animate-pulse">Developer</span>, el
            perfil de Linkedin que <span className="text-primary">gusta</span>,
            sin necesidad de invertir más tiempo
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Tu perfil de Linkedin debería ser tu principal activo, no un desafio
            constante.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={async e => {
            e.preventDefault()
            setLoading(true)
            const data = new FormData(form.current!)
            const res = await fetch('/api/linkedin', {
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
                  htmlFor="linkedin"
                  className="block text-xs text-gray-200 sr-only"
                >
                  Linkedin
                </label>
                <div>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    className="bg-black border-gray-900 w-full text-xl text-white border-primary focus:border-primary"
                    placeholder="https://www.linkedin.com/in/tu-nombre/"
                    required
                  />
                </div>
                <button className="bg-gray-600 text-gray-300 text-xl w-full hover:bg-primary transition px-2 py-1 mt-4">
                  Mejorar {loading && '...'}
                </button>
              </>
            )}
          </div>
        </form>
      </Container>
    </>
  )
}

LinkedinPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LinkedinPage
