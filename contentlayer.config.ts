import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files'

const Author = defineNestedType(() => ({
  fields: {
    name: { type: 'string', required: true }
  }
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    authors: { type: 'list', of: Author, required: true },
    description: { type: 'string', required: true },
    imageUrl: { type: 'string', required: true },
    date: { type: 'date', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/blog/${doc._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
})
