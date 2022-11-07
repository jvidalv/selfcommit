import { HTMLProps } from 'react'

import Footer from 'components/layout/footer'
import Header from 'components/layout/header'

const Layout = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-screen text-base text-default selection:bg-secondary selection:text-white">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
