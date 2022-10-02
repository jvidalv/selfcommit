import { HTMLProps } from 'react'

import clsx from 'clsx'
import Head from 'next/head'

import Footer from 'components/pages/index/footer'
import Header from 'components/pages/index/header'

const Layout = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-screen text-base bg-default text-default selection:bg-secondary selection:text-white">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
