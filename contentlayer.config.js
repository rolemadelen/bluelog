import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'

export const urlFromFilePath = doc => {
    return doc._raw.flattenedPath.replace(/pages\/?/, '')
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `ds/**/*.md`,
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
                    // skip `/docs` prefix
                    .slice(1)
                    .map(pathName => {
                        return { pathName }
                    }),
        },
    },
}))

export const AlgoPost = defineDocumentType(() => ({
    name: 'AlgoPost',
    filePathPattern: `algo/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        lang: { type: 'string'},
        category: { type: 'string'},
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
                    // skip `/docs` prefix
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
                    // skip `/docs` prefix
                    .slice(1)
                    .map(pathName => {
                        return { pathName }
                    }),
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post, AlgoPost, CP],
    markdown: { rehypePlugins: [highlight] },
})