import type { ReactElement, ReactNode } from 'react'
import { useEffect } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  useEffect(() => {
    if (window) {
      const handleRouteChange = (url: string) => {
        // @ts-ignore
        window?.mixpanel?.track('Page View', { url })
      }
      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  const getLayout = Component.getLayout || (page => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default MyApp
