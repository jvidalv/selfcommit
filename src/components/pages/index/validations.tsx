import {
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaStackOverflow
} from 'react-icons/fa'

import ContentSection from 'components/pages/index/content-section'

const frameworks = [
  {
    title: 'Linkedin',
    Icon: FaLinkedin,
    url: 'https://linkedin.com'
  },
  {
    title: 'Github',
    Icon: FaGithub,
    url: 'https://github.com/'
  },
  {
    title: 'Stack Overflow',
    Icon: FaStackOverflow,
    url: 'https://stackoverflow.com/'
  },
  {
    title: 'Web personal',
    Icon: FaGlobe,
    url: 'https://selfcommit.dev/'
  },
  {
    title: 'Curriculum Vitae',
    Icon: FaFilePdf,
    url: '#'
  }
]

const Validations = () => (
  <ContentSection
    title="Validaciones"
    id="validations"
    lead={
      <>
        <span className="text-primary">Validamos</span> que cumplas todos los
        requisitos mínimos para unas{' '}
        <span className="text-primary">mejores oportunidades</span> en el
        mercado laboral.
      </>
    }
  >
    <div className="w-full max-w-6xl space-y-2">
      <div className="relative px-6 pt-8 pb-4 border bg-offset border-default">
        <h3 className="absolute top-0 px-4 py-1 text-xs tracking-tight uppercase -translate-y-1/2 border border-current rounded-full right-4 bg-default">
          Validaciones
        </h3>
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {frameworks.map(({ title, Icon, url }) => (
            <li key={title}>
              <a className="flex flex-col items-center gap-2" href={url}>
                <Icon className="w-10 h-10" />
                <span className="text-center">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-right">
        <a className="text-primary" href="#">
          {' '}
          ...and more &rarr;
        </a>
      </p>
    </div>
  </ContentSection>
)

export default Validations
