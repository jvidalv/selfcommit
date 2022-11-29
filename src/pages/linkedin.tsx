import { ReactElement, useEffect, useMemo, useRef, useState } from 'react'

import { discordLink, linkedinLink } from 'navigation/constants'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useForm from 'hooks/use-form'

import ContactForm from 'components/contact-form'
import Container from 'components/container'
import Layout from 'components/layout'
import Loader from 'components/loader'

export type ReportCategories =
  | 'headline'
  | 'summary'
  | 'experience'
  | 'conclusions'

const Report = () => {
  const { query } = useRouter()
  const [reports, setReports] = useState<
    {
      name: string
      type: ReportCategories
      inProgress: boolean
      completed: boolean
    }[]
  >([
    {
      name: 'Analizando el titular',
      type: 'headline',
      inProgress: true,
      completed: false
    },
    {
      name: 'Analizando el resumen',
      type: 'summary',
      inProgress: false,
      completed: false
    },
    {
      name: 'Analizando la experiencia',
      type: 'experience',
      inProgress: false,
      completed: false
    },
    {
      name: 'Preparando las conclusiones',
      type: 'conclusions',
      inProgress: false,
      completed: false
    }
  ])

  useEffect(() => {
    const getReportCategory = async (type: ReportCategories) => {
      const response = await fetch(
        `/api/report?linkedin=${query.report}&type=${type}`
      )
      if (response.ok) {
        const reportPositionIndex = reports.findIndex(r => r.type === type)

        setReports(rs =>
          rs.map((r, index) => {
            if (r.type === type) {
              return {
                ...r,
                inProgress: false,
                completed: true
              }
            }

            if (index === reportPositionIndex + 1) {
              return {
                ...r,
                inProgress: true
              }
            }

            return r
          })
        )
      }
    }

    const reportInProgress = reports.find(({ inProgress }) => inProgress)
    if (reportInProgress) {
      getReportCategory(reportInProgress.type)
    }
  }, [query.report, reports])

  const isNotCompleted = reports.some(p => !p.completed)

  const name = useMemo(() => {
    const reportAsArray = (query.report as string).split('/')
    return reportAsArray[reportAsArray.length - 1]
  }, [query])

  if (!isNotCompleted) {
    return (
      <div className="max-w-2xl animate-from-top">
        <h1 className="text-5xl text-white font-bold max-w-xl">
          Analisis de linkedin <span className="text-green-500">===</span>
        </h1>
        <p className="text-primary mt-2 text-2xl border-b border-gray-800 pb-4">
          {name}
        </p>
        <h2 className="mt-6 text-2xl text-primary font-bold">
          Titular (headline)
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          {`/**
              Tu título de LinkedIn es el componente más visto de tu
              perfil. Aparece en todas partes donde junto con tu nombre y brinda a
              los reclutadores una descripción general rápida de quién eres y por
              qué deberían hacer clic en tu perfil.           **/`}
        </p>
        <p className="text-white text-xl mt-4">Puntaje: 7/10</p>
        <p className="text-gray-300 mt-3 text-sm">
          Tu título es demasiado genérico y se puede mejorar.
        </p>
        <p className="text-gray-300 mt-3 text-sm">
          Es importante comprobar que hayas incluido las palabras clave
          correctas que espera que busquen tus reclutadores.
        </p>
        <p className="text-gray-300 mt-3 text-sm">A continuación un ejemplo:</p>
        <p className="bg-white font-sans px-4 py-3 mt-4 max-w-lg">
          <span className="text-lg font-bold">Brais Moure 2nd degree</span>
          <br />
          <div className="text-sm">
            Freelance full-stack Dev | iOS & Android Engineer | Divulgador sobre
            programación de Apps | Microsoft MVP & GDG Lead | LinkedIn Creator
          </div>
          <span className="text-xs text-gray-500">
            Talks about #ios, #github, #android, #programming, and
            #mobiledevelopers
          </span>
        </p>
        <p className="text-xs text-gray-500 mt-3">
          *Las palabras clave potencian los algoritmos de Linkedin y son clave
          para la visibilidad de tu perfil. Recuerda que hay muchos candidatos
          aplicando a tu posición favorita y debes destacar en cada detalles del
          proceso de aplicación y selección.
        </p>
        <hr className="border-gray-800 mt-6" />
        <h2 className="mt-6 text-2xl text-primary font-bold">
          Resumen (summary)
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          {`/** 
              Tu resumen te da la oportunidad de dar una excelente
primera impresión a los reclutadores, clientes
potenciales y otros profesionales que confían en
Linkedin, y es donde explicas por qué eres el candidato
adecuado.           **/`}
        </p>
        <p className="text-white text-xl mt-4">Puntaje: 5/10</p>
        <p className="text-gray-300 mt-2 text-sm">
          Tu resumen es una sección crítica de su perfil, y por eso te
          recomendamos refinarlo.
        </p>
        <ul className="text-gray-300 mt-2 text-sm">
          <li>
            1. Define <span className="text-primary">a qué ayudas</span> a tu
            público objetivo (CTO, Engineer Manager).
          </li>
          <li>
            2. Define <span className="text-primary">cómo los ayudas</span>.
          </li>
          <li>
            3. Define{' '}
            <span className="text-primary">
              lo qué gana el público objetivo si te tiene en su equipo
            </span>{' '}
            (lo que te diferencia).
          </li>
        </ul>
        <p className="text-gray-300 mt-3 text-sm">
          Recuerda usar palabras clave dentro del resumen para facilitar que el
          algoritmo de Linkedin te de más relevancia.
        </p>
        <p className="text-gray-300 mt-3 text-sm">
          Si tienes proyectos que puedas compartir dentro de la experiencia, no
          dudes compartirlos.
        </p>
        <hr className="border-gray-800 mt-6" />
        <h2 className="mt-6 text-2xl text-primary font-bold">Experiencia</h2>
        <p className="text-gray-500 mt-2 text-sm">
          {`/** 
              Los reclutadores que llegaron a tu perfil y leyeron
tu resumen, ahora quieren asegurarse de que tengas la
experiencia adecuada para hacer una copia de seguridad
de todo. Los reclutadores prestarán mucha atención a los
títulos de trabajo que has tenido y tus logros.           **/`}
        </p>
        <p className="text-white text-xl mt-4">Puntaje: 5/10</p>
        <p className="text-gray-300 mt-2 text-sm">
          Tu sección de experiencia puede ser aún mejor. Esta sección debe tener
          una mezcla de <span className="text-primary">outcomes</span> y{' '}
          <span className="text-primary">keywords</span> que suelen usarse
          dentro del ciclo de desarrollo de producto tanto a nivel técnico como
          a nivel de negocio:
        </p>
        <p className="text-gray-300 mt-2 text-sm">
          <span className="text-primary">
            Outcomes: especifica cual es el impacto que has ayudado a generar en
            otras compañías.
          </span>{' '}
          A continuación algunos ejemplos:
        </p>
        <ul className="text-gray-300 mt-2 text-sm">
          <li>
            - Desarrollo íntegro de la aplicación xx para iOS publicada en la
            App Store de Apple.
          </li>
          <li>
            - Desarrollo de la aplicación web (Next.js, GraphQL, TypeScript)
            desde cero. Usando herramientas como Clerk, Urql y Radix-UI.
          </li>
          <li>
            - Ayudé a una de las compañías de arte más grandes del mundo en la
            transición de exposiciones de arte físico a experiencias 100% en
            línea usando Next.js (Redux, React-i18n, Styled-Components, SCSS).
          </li>
        </ul>
        <p className="text-gray-300 mt-3 text-sm">
          <span className="text-primary">Keywords:</span> En los ejemplos
          anteriores podrás ver que se han{' '}
          <span className="text-primary">
            usado keywords que están relacionados con tu rol
          </span>{' '}
          como programador. Te invito a elegir tus 5 ofertas de trabajo
          favoritas y añadir a tu perfil las palabras que más se repitan en la
          oferta.
        </p>
        <hr className="border-gray-800 mt-6" />
        <h2 className="mt-6 text-2xl text-primary font-bold">Reflexiones</h2>
        <p className="text-gray-300 mt-4 text-sm">
          - La mayoría de CTOs y Engineer Managers no solo buscan alguien con
          conocimientos técnicos sino también con criterio de decisión y
          autonomía. Por eso es importante que en tu perfil hables de los
          impactos generados tanto a los clientes como a los objetivos de
          negocio.
        </p>
        <p className="text-gray-300 mt-2 text-sm">
          - Para conseguir tus objetivos no basta con hacer lo que todos suelen
          hacer, sino hacer más por destacar. Tu perfil debe destacar por sobre
          los demás, y para hacerlo, debes superar al algoritmo de Linkedin y
          facilitar la lectura a los reclutadores. Recuerda que muchos
          reclutadores no tienen conocimiento técnico, por lo que debes intentar
          usar un lenguaje fácil de entender.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold max-w-xl">
        Preparando el <span className="text-primary">reporte</span>...
      </h1>
      <div className="grid gap-4 mt-12">
        {reports.map(({ name, type, inProgress, completed }) => (
          <div
            key={type}
            className={`flex items-center space-x-2 transition-500 ${
              !inProgress && !completed && 'opacity-25'
            }`}
          >
            <h2 className="flex items-center transition-500 text-xl text-gray-400 font-semibold">
              {name} {inProgress && <Loader className="ml-2" />}{' '}
              {completed && '✓'}
              {!inProgress && !completed && '...'}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

const Form = () => {
  const { push, asPath } = useRouter()
  const { form, loading, success, onSubmit } = useForm('linkedin')

  return (
    <>
      <div className="max-w-3xl">
        <h1 className="text-5xl text-white font-bold">
          <span className="text-primary animate-pulse">Developer</span>, el
          perfil de Linkedin que <span className="text-primary">gusta</span>,
          sin necesidad de invertir más tiempo
        </h1>
        <p className="mt-6 text-gray-400 text-xl">
          Tu perfil de Linkedin debería ser tu principal activo, no un desafio
          constante.
        </p>
      </div>
      <div className="w-full max-w-2xl mt-8">
        {success ? (
          <ContactForm
            className="bg-black shadow-primary border-primary border-2"
            title="Gracias por confiar en nosotros, pronto nos pondremos en contacto contigo. También puedes ponerte en contacto con nosotros a través de los siguientes canales:"
          />
        ) : (
          <form
            ref={form}
            onSubmit={e => {
              onSubmit(e)
              const data = new FormData(form.current!)
              push(`${asPath}?report=${data.get('linkedin')}`)
            }}
          >
            <label
              htmlFor="linkedin"
              className="block text-xs text-gray-200 sr-only"
            >
              Linkedin
            </label>
            <div>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                className="bg-black border-gray-900 w-full text-xl text-white border-primary focus:border-primary"
                placeholder="https://www.linkedin.com/in/tu-nombre/"
                pattern="^https:\/\/www.linkedin.com\/in\/*[0-9a-z/]*"
                required
              />
            </div>
            <button className="bg-gray-600 text-gray-300 text-xl w-full hover:bg-primary transition px-2 py-1 mt-4">
              Mejorar {loading && '...'}
            </button>
          </form>
        )}
      </div>
    </>
  )
}

const LinkedinPage = () => {
  const { query } = useRouter()

  const hasLinkedinParam = query.report

  return (
    <>
      <Head>
        <title>Linkedin - Selfcommit.</title>
      </Head>
      <Container className="mt-12">
        {hasLinkedinParam ? <Report /> : <Form />}
      </Container>
    </>
  )
}

LinkedinPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LinkedinPage
