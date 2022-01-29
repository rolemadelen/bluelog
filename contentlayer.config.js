import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'

export const urlFromFilePath = doc => {
    return doc._raw.flattenedPath.replace(/pages\/?/, '')
}

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        subtitle: { type: 'string', required: false },
        date: { type: 'date', required: true },
        lang: { type: 'string', required: true },
        tags: { type: 'string', required: false },
    },
    computedFields: {
        url_path: {
            type: 'string',
            description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
            resolve: urlFromFilePath,
        },
        pathSegments: {
            type: 'json',
            resolve: doc =>
                doc._raw.flattenedPath
                    .split('/')
                    .slice(1)
                    .map(pathName => {
                        return { pathName }
                    }),
        },
    },
}))

export const DSA = defineDocumentType(() => ({
    name: 'DSA',
    filePathPattern: `dsa/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        section: { type: 'string', required: true },
    },
    computedFields: {
        url_path: {
            type: 'string',
            description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
            resolve: urlFromFilePath,
        },
        pathSegments: {
            type: 'json',
            resolve: doc =>
                doc._raw.flattenedPath
                    .split('/')
                    .slice(1)
                    .map(pathName => {
                        return { pathName }
                    }),
        },
    },
}))


export const CP = defineDocumentType(() => ({
    name: 'CP',
    filePathPattern: `cp/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        from: { type: 'string', required: true },
        level: { type: 'string'},
    },
    computedFields: {
        url_path: {
            type: 'string',
            description: 'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
            resolve: urlFromFilePath,
        },
        pathSegments: {
            type: 'json',
            resolve: doc =>
                doc._raw.flattenedPath
                    .split('/')
                    .slice(1)
                    .map(pathName => {
                        return { pathName }
                    }),
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Blog, DSA, CP],
    markdown: { rehypePlugins: [highlight] },
})