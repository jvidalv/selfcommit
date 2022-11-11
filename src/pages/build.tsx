import { ReactElement, useRef, useState } from 'react'

import {
  discordLink,
  linkedinLink,
  twitchChannelLink
} from 'navigation/constants'
import Head from 'next/head'

import useForm from 'hooks/use-form'

import ContactForm from 'components/contact-form'
import Container from 'components/container'
import Layout from 'components/layout'

const bulletPoints = [
  {
    text: 'Selfcommit será contruída en directo a través de Twitch, y tú podrás participar dándonos feedback en tiempo real.'
  },
  {
    text: 'No solo código. También el equipo de fundadores y la comunidad junto a ti estaremos tomando decisiones de negocio, producto y diseño. Esto te aportará un gran conocimiento en variables que te llevarán a otro nivel como desarrollador.'
  },
  {
    text: 'En tiempo real estaremos solucionando cualquier tipo de duda que tengas acerca del mundo del desarrollo de producto.'
  },
  {
    text: 'Somos un equipo de Software Engineers y Product Managers con años de experiencia cuyo objetivo es crear una comunidad sana que se divierta y aprenda a crear una startup desde cero.'
  }
]

const BuildPage = () => {
  const { form, loading, success, onSubmit } = useForm('newsletter')

  return (
    <>
      <Head>
        <title>Construye con nosotros - Selfcommit.</title>
      </Head>
      <Container className="mt-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl text-white font-bold">
            <span className="text-primary animate-pulse">Developer</span>, te
            gustaría formar parte del proceso de creación de{' '}
            <span className="text-primary">Selfcommit</span>?
          </h1>
          <p className="mt-6 text-gray-400">
            Te invitamos a que te unas a la comunidad y nos acompañes en todo el
            proceso de desarrollo de la plataforma:
          </p>
        </div>
        <div className="grid gap-6 mt-8 max-w-4xl">
          <div className="h-[1px] bg-primary w-1/6 opacity-50" />
          {bulletPoints.map(({ text }, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>
                <div className="flex items-center justify-center border border-primary h-10 w-10 text-primary">
                  {index + 1}
                </div>
              </div>
              <div className="text-gray-300">{text}</div>
            </div>
          ))}
          <div className="h-[1px] bg-primary w-1/6 opacity-50" />
        </div>

        <div className="w-full max-w-2xl mt-8">
          {success ? (
            <ContactForm
              className="bg-black shadow-primary border-primary border-2"
              title="Gracias por confiar en nosotros, pronto nos pondremos en contacto contigo."
            />
          ) : (
            <form ref={form} onSubmit={onSubmit}>
              <div>
                <div className="mt-12 text-xl text-white">
                  ¿Te suena genial?
                </div>
                <label htmlFor="email" className="block mt-2 text-gray-300">
                  Compartenos tu email para que te avisemos antes de cada
                  sesión.
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-3 bg-black border-primary w-full text-xl text-white border-primary focus:border-primary"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <button className="bg-primary text-gray-300 text-xl w-full px-2 py-1 mt-4">
                Subscribirme {loading && '...'}
              </button>
              <small className="block mt-4 text-gray-400">
                *Tambien puedes subscribirte{' '}
                <a
                  href={twitchChannelLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  directamente en Twitch
                </a>
                .
              </small>
            </form>
          )}
        </div>
      </Container>
    </>
  )
}

BuildPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default BuildPage
