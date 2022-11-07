import { ReactElement, useRef, useState } from 'react'

import { discordLink, linkedinLink } from 'navigation/constants'
import Head from 'next/head'

import useForm from 'hooks/use-form'

import ContactForm from 'components/contact-form'
import Container from 'components/container'
import Layout from 'components/layout'

const LinkedinPage = () => {
  const { form, loading, success, onSubmit } = useForm('linkedin')

  return (
    <>
      <Head>
        <title>Linkedin - Selfcommit.</title>
      </Head>
      <Container className="mt-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl text-white font-bold">
            <span className="text-primary animate-pulse">Developer</span>, el
            perfil de Linkedin que <span className="text-primary">gusta</span>,
            sin necesidad de invertir más tiempo
          </h1>
          <p className="mt-6 text-gray-400 text-xl">
            Tu perfil de Linkedin debería ser tu principal activo, no un desafio
            constante.
          </p>
        </div>

        <div className="w-full max-w-2xl mt-8">
          {success ? (
            <ContactForm
              className="bg-black shadow-primary border-primary border-2"
              title="Gracias por confiar en nosotros, pronto nos pondremos en contacto contigo. También puedes ponerte en contacto con nosotros a través de los siguientes canales:"
            />
          ) : (
            <form ref={form} onSubmit={onSubmit}>
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
                  type="url"
                  className="bg-black border-gray-900 w-full text-xl text-white border-primary focus:border-primary"
                  placeholder="https://www.linkedin.com/in/tu-nombre/"
                  required
                />
              </div>
              <button className="bg-gray-600 text-gray-300 text-xl w-full hover:bg-primary transition px-2 py-1 mt-4">
                Mejorar {loading && '...'}
              </button>
            </form>
          )}
        </div>
      </Container>
    </>
  )
}

LinkedinPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LinkedinPage
