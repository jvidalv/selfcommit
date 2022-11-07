import { ReactElement } from 'react'

import Head from 'next/head'

import Container from 'components/container'
import Layout from 'components/layout'

const team = [
  {
    name: 'Andres Villamizar',
    charge: 'CPO y Senior Product Manager',
    photo: '/team/andres.jpg'
  },
  {
    name: 'Antonio Arenapulido',
    charge: 'Senior DevOps engineer',
    photo: '/team/antonio.png'
  },
  {
    name: 'José David García',
    charge: 'Senior Product Manager ',
    photo: '/team/jose.jpg'
  },
  {
    name: 'Josep Vidal',
    charge: 'Senior frontend engineer',
    photo: '/team/josep.jpg'
  }
]

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing - selfcommit.</title>
      </Head>
      <div className="bg-gray-900 h-32">
        <Container className="h-full flex items-center">
          <h1 className="text-white text-5xl">Pricing</h1>
        </Container>
      </div>
      <Container className="mt-16 pb-16"></Container>
    </>
  )
}

PricingPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PricingPage
