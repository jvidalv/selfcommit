import {
  discordLink,
  githubLink,
  linkedinLink,
  twitterLink
} from 'navigation/constants'
import paths from 'navigation/paths'
import Link from 'next/link'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import Container from 'components/container'

const links = [
  {
    url: githubLink,
    description: 'Selfcommit en GitHub',
    icon: FaGithub
  },
  {
    url: discordLink,
    description: 'Selfcommit en Discord',
    icon: FaDiscord
  },
  {
    url: twitterLink,
    description: 'Selfcommit en Twitter',
    icon: FaTwitter
  },
  {
    url: linkedinLink,
    description: 'Selfcommit en Linkedin',
    icon: FaLinkedin
  }
]

const features = {
  title: 'Producto',
  links: [{ href: paths.linkedin, name: 'Validador de Linkedin' }]
}

const resources = {
  title: 'Recursos',
  links: [
    { href: paths.privacyPolicy, name: 'Política de Privacidad' },
    { href: paths.terms, name: 'Términos y condiciones' }
    // { href: paths.pricing, name: 'Pricing' }
  ]
}

const company = {
  title: 'Empresa',
  links: [
    { href: paths.contact, name: 'Contacto' },
    { href: paths.aboutUs, name: 'Sobre nosotros' },
    { href: paths.blog, name: 'Blog' }
  ]
}

const footerLinks = [features, company, resources]

const Footer = () => {
  return (
    <footer className="border-t py-12 border-gray-900">
      <Container className="flex justify-between">
        <div>
          <p className="text-white text-lg font-bold">Selfcommit.</p>
          <div>
            <ul className="grid grid-cols-4 gap-4 mt-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <span className="sr-only">{link.description}</span>
                    <link.icon className="w-5 h-5 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {footerLinks.map((links, index) => (
            <div key={index}>
              <h3 className="text-white">{links.title}</h3>
              <ul className="mt-3 space-y-1">
                {links.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      key={index}
                      href={link.href}
                      className="text-sm text-gray-400 text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
