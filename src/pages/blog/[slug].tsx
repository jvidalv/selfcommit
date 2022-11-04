import { ReactElement } from 'react'

import { Post, allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Container from 'components/container'
import Layout from 'components/layout'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map(post => post.url)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Post = allPosts.find(
    post => post._raw.flattenedPath === params?.slug
  )!

  return {
    props: {
      post
    }
  }
}

const BlogPostPage = ({ post }: { post: Post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="bg-gray-900 h-32">
        <Container className="h-full flex flex-col justify-center">
          <time
            dateTime={post.date}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>{format(parseISO(post.date), 'LLLL d, yyyy')}</span>
          </time>
          <h1 className="text-white text-5xl mt-2">{post.title}</h1>
        </Container>
      </div>
      <Container className="grid grid-cols-10 gap-8">
        <div className="col-span-7 border-r pr-12 border-gray-900">
          <article
            className="prose max-w-none prose-invert py-8"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </div>
        <div className="col-span-3 py-8">
          <div className="text-lg text-gray-600">Autores</div>
          <div className="space-y-2 mt-4">
            {post.authors.map(author => (
              <div
                key={author.name}
                className="flex items-center space-x-2 text-gray-400"
              >
                <span>{author.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

BlogPostPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default BlogPostPage
