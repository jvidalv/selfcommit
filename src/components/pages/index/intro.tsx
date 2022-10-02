import paths from 'navigation/paths'
import { BsDiscord } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa'

import ContentSection from 'components/pages/index/content-section'

const Intro = () => (
  <ContentSection
    id="intro"
    title="Para Desarolladores"
    eyebrow={
      <div
        className="p-3 bg-primary border-black rounded-md text-white"
        slot="eyebrow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          fill="currentColor"
        >
          <path d="M573.52 314.98c-3.42-34.38-18.06-61.08-43.91-80.11s-60.94-28.55-105.25-28.55c-30.12 0-55.55 4.2-76.28 12.58-20.75 8.38-36.58 19.95-47.52 34.72-10.94 14.78-16.41 31.53-16.41 50.28-.56 15.62 2.77 29.27 10.02 40.91 7.25 11.66 17.27 21.67 30.05 30.05s27.55 15.62 44.31 21.73c16.75 6.11 34.66 11.3 53.7 15.55l78.41 18.75c38.06 8.53 73 19.89 104.83 34.09 31.81 14.22 59.38 31.69 82.67 52.42 23.28 20.75 41.39 45.17 54.33 73.3 12.92 28.12 19.53 60.38 19.81 96.72-.28 53.42-13.84 99.66-40.69 138.72s-65.48 69.33-115.91 90.77c-50.44 21.44-111.16 32.17-182.17 32.17-70.47 0-131.77-10.8-183.89-32.39s-92.75-53.62-121.88-96.09-44.39-95.09-45.8-157.88H250.5c1.98 29.27 10.44 53.62 25.34 73.08 14.91 19.47 34.94 34.09 60.09 43.89 25.14 9.81 53.62 14.7 85.44 14.7 31.25 0 58.45-4.55 81.61-13.64s41.12-21.73 53.91-37.92 19.17-34.8 19.17-55.83c0-19.59-5.77-36.08-17.27-49.42s-28.27-24.72-50.28-34.09-48.94-17.89-80.75-25.58l-95.03-23.86c-73.58-17.89-131.67-45.88-174.28-83.94-42.62-38.06-63.78-89.34-63.5-153.84-.28-52.84 13.84-99 42.41-138.5 28.55-39.48 67.83-70.31 117.83-92.47S362 52.06 425.64 52.06c64.77 0 121.38 11.08 169.81 33.23s86.14 52.98 113.14 92.47c26.98 39.5 40.91 85.23 41.77 137.22H573.52z" />
          <path d="M828.66 948.77c-28.12 0-52.2-10.02-72.23-30.03-20.03-20.03-30.03-44.11-30.03-72.23 0-27.84 10-51.7 30.03-71.59 20.03-19.88 44.11-29.83 72.23-29.83 27.27 0 51.12 9.95 71.59 29.83 20.45 19.89 30.69 43.75 30.69 71.59 0 18.75-4.77 35.88-14.28 51.34-9.53 15.48-21.95 27.84-37.3 37.08-15.34 9.22-32.23 13.84-50.7 13.84z" />
        </svg>
      </div>
    }
    lead={
      <>
        Selfcommit es una <span className="text-primary">plataforma</span> web y{' '}
        <span className="text-primary">comunidad</span> donde{' '}
        <span className="text-primary">crecer</span> como desarollador.
      </>
    }
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <a
        href={paths.discord}
        className="flex items-center justify-center gap-3 px-4 py-3 border-2 border-current rounded-md hover:text-secondary"
      >
        <BsDiscord className="h-8" />
        <span>Comunidad</span>
      </a>
      <a
        href="#"
        className="flex items-center justify-center gap-3 px-4 py-3 border-2 border-current rounded-md hover:text-secondary"
      >
        <FaRocket className="h-8" />
        <span>Plataforma</span>
      </a>
    </div>
  </ContentSection>
)

export default Intro
