import { ReactElement } from 'react'

import { allPosts } from 'contentlayer/generated'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Container from 'components/container'
import Layout from 'components/layout'

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog - selfcommit.</title>
      </Head>
      <div className="bg-gray-900 h-32">
        <Container className="h-full flex items-center">
          <h1 className="text-white text-5xl">Blog</h1>
        </Container>
      </div>
      <Container className="mt-16">
        <div className="grid grid-cols-3 gap-8">
          {allPosts.map(post => (
            <Link
              key={post.url}
              href={post.url}
              className="relative border border-gray-900 hover:bg-gray-900 transition-all text-white"
            >
              <div className="relative h-[200px] border-b border-gray-900">
                <Image alt={post.title} src={post.imageUrl} fill />
              </div>
              <div className="p-4">
                <h3 className="text-xl">{post.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}

BlogPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default BlogPage
