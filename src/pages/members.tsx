import { ReactElement } from 'react'

import paths from 'navigation/paths'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BsDiscord } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'

import Container from 'components/container'
import Layout from 'components/layout'
import Footer from 'components/pages/index/footer'
import Header from 'components/pages/index/header'
import Splash from 'components/pages/index/splash'

const Form = () => {
  return (
    <div className="h-full">
      <Head>
        <title>Miembros - Selfcommit.</title>
      </Head>
      <main className="h-full overflow-x-hidden text-base bg-default text-default selection:bg-secondary selection:text-white">
        aaa
      </main>
    </div>
  )
}

Form.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Form
