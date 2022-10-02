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
    <footer className="h-64 bg-gray-800">
      <div className="flex items-center container mx-auto pt-24 justify-between">
        <p className="text-white font-bold">© Selfcommit.</p>
        <ul className="relative grid grid-cols-2 gap-1 sm:grid-cols-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="flex items-center justify-center w-16 h-16 p-4"
                href={link.url}
              >
                <span className="sr-only">{link.description}</span>
                <link.icon className="w-6 h-6 text-white" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
