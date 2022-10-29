import paths from 'navigation/paths'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

const links = [
  {
    url: 'https://github.com/self-commit',
    description: 'Selfcommit en GitHub',
    icon: FaGithub
  },
  {
    url: paths.discord,
    description: 'Selfcommit en Discord',
    icon: FaDiscord
  },
  {
    url: 'https://twitter.com/selfcommit',
    description: 'Selfcommit en Twitter',
    icon: FaTwitter
  }
]

const Footer = () => {
  return (
    <footer className="border-t py-4 border-gray-900">
      <div className="flex items-center container mx-auto justify-between">
        <p className="text-white font-bold">© Selfcommit.</p>
        <ul className="relative grid grid-cols-2 gap-1 sm:grid-cols-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="flex items-center justify-center w-12 h-12 p-4"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{link.description}</span>
                <link.icon className="w-6 h-6 text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
