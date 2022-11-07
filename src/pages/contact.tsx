import { ReactElement } from 'react'

import Head from 'next/head'

import ContactForm from 'components/contact-form'
import Container from 'components/container'
import Layout from 'components/layout'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contacto - selfcommit.</title>
      </Head>
      <div className="bg-gray-900 h-32">
        <Container className="h-full flex items-center">
          <h1 className="text-white text-5xl">Contacto</h1>
        </Container>
      </div>
      <Container className="mt-16 pb-16">
        <h2 className="text-4xl my-16 text-gray-300">
          Ubicados entre Barcelona y Madrid - <br />{' '}
          <span className="text-primary">100%</span> remoto,{' '}
          <span className="text-primary">100%</span> internacionales.
        </h2>
        <ContactForm />
      </Container>
    </>
  )
}

ContactPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ContactPage
