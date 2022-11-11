import { HTMLProps } from 'react'

import clsx from 'clsx'
import {
  discordLink,
  emailLink,
  githubLink,
  linkedinLink,
  twitterLink
} from 'navigation/constants'
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

import useForm from 'hooks/use-form'

const links = [
  {
    name: emailLink,
    href: `mailto:${emailLink}`,
    icon: FaEnvelope
  },
  {
    name: 'Discord',
    href: discordLink,
    icon: FaDiscord
  },
  {
    name: 'Linkedin',
    href: linkedinLink,
    icon: FaLinkedin
  },
  {
    name: 'Twitter',
    href: twitterLink,
    icon: FaTwitter
  },
  {
    name: 'Github',
    href: githubLink,
    icon: FaGithub
  }
]

const ContactForm = ({
  className,
  title = 'Contactándonos a través de alguno de los siguientes canales:'
}: {
  className?: string
  title?: string
}) => {
  const { form, loading, success, onSubmit } = useForm('contact')

  return (
    <div
      className={`${className} bg-gray-900 grid grid-cols-1 gap-16 p-6 -mx-4 sm:-mx-6 lg:-mx-8`}
    >
      <div>
        <p className="text-gray-400">{title}</p>
        <div className="flex flex-col gap-4 mt-6">
          {links.map(({ href, name, ...props }) => (
            <div key={href} className="flex gap-4 items-center">
              <props.icon className="w-6 h-6 text-gray-400" />
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300"
              >
                {name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <form ref={form} className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="message" className="text-gray-400">
            Puedes escribirnos con mas detalles en el siguiente formulario:
          </label>
          {success ? (
            <div className="bg-green-900 p-4 mt-4">
              <p className="text-white">
                Gracias por confiar en nosotros, pronto nos pondremos en
                contacto contigo.
              </p>
            </div>
          ) : (
            <>
              <textarea
                id="message"
                name="message"
                className="mt-4 bg-gray-800 text-white"
                placeholder="Buenas, me llamo Pepe. Soy un developer que esta acabando los estudios, y me gustaria que me orientaras laboralmente.

                ((Tips: cuéntanos cuál es tu objetivo en Linkedin (ejemplo: encontrar un trabajo, encontrar clientes, etc.)))) "
                rows={5}
              />
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-4 bg-gray-800 text-white w-4/6 sm:w-1/2"
                placeholder="tu@email.com"
                required
              />
              <button className="bg-gray-600 text-gray-300 w-fit hover:bg-primary transition px-2 py-1 mt-5">
                Enviar {loading && '...'}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
