import { ReactElement } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import Container from 'components/container'
import Layout from 'components/layout'

const team = [
  {
    name: 'Josep Vidal',
    charge: 'Senior frontend engineer',
    photo: '/team/josep.jpg',
    networks: [
      {
        name: 'Github',
        href: 'https://github.com/jvidalv',
        icon: FaGithub
      },
      {
        name: 'Linkedin',
        href: 'https://es.linkedin.com/in/josepvidalvidal',
        icon: FaLinkedin
      }
    ]
  },
  {
    name: 'Andres Villamizar',
    charge: 'CPO y Senior Product Manager',
    photo: '/team/andres.jpg',
    networks: [
      {
        name: 'Linkedin',
        href: 'https://es.linkedin.com/in/cvandresvillamizar',
        icon: FaLinkedin
      }
    ]
  },
  {
    name: 'Antonio Arenapulido',
    charge: 'Senior DevOps engineer',
    photo: '/team/antonio.png',
    networks: [
      {
        name: 'Github',
        href: 'https://github.com/antonioarenzanapulido',
        icon: FaGithub
      },
      {
        name: 'Linkedin',
        href: 'https://es.linkedin.com/in/antonio-arenzana-pulido/en',
        icon: FaLinkedin
      }
    ]
  },
  {
    name: 'José David García',
    charge: 'Senior Product Manager ',
    photo: '/team/jose.jpg',
    networks: [
      {
        name: 'Linkedin',
        href: 'https://es.linkedin.com/in/josedavidgarciafernandez',
        icon: FaLinkedin
      }
    ]
  }
]

const AboutUsPage = () => {
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
        <h2 className="text-2xl my-16 text-gray-300">
          Somos un equipo multidisciplinar enfocado 100% a desarrollo y producto
          en el mundo IT.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(({ photo, name, charge, networks }) => (
            <div key={name} className="bg-gray-900 p-4 flex flex-col  ">
              <Image
                width={250}
                height={250}
                className="w-full"
                src={photo}
                alt={name}
              />
              <h3 className="text-xl text-white mt-4">{name}</h3>
              <p className="mt-1 text-gray-400">{charge}</p>
              <div className="flex mt-auto gap-4">
                {networks.map(({ name, href, ...props }) => (
                  <a key={name} href={href} target="_blank" rel="noreferrer">
                    <p className="sr-none w-0">{name}</p>
                    <props.icon className="text-gray-400 w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

AboutUsPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default AboutUsPage
