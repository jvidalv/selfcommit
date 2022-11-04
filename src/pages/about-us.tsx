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

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Sobre nosotros - selfcommit.</title>
      </Head>
      <div className="bg-gray-900 h-32">
        <Container className="h-full flex items-center">
          <h1 className="text-white text-5xl">Sobre nosotros</h1>
        </Container>
      </div>
      <Container className="mt-16 pb-16">
        <p className="my-16 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid grid-cols-4 gap-8">
          {team.map(({ photo, name, charge }) => (
            <div key={name} className="bg-gray-900 p-4">
              <img className="w-full" src={photo} alt={name} />
              <h2 className="text-2xl text-white mt-4">{name}</h2>
              <p className="mt-1 text-gray-400">{charge}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

TermsPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default TermsPage
