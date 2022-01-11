import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// const postsDirectory = path.join(process.cwd(), 'algo')

export function getSortedPostsData(fpath) {
    const postsDirectory = path.join(process.cwd(), fpath)
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const sep = fileName.indexOf('-')
        const id = (fpath == "cp") ? [fileName.slice(0, sep), fileName.slice(sep + 1).replace(/\.md$/, '')] : [fileName.replace(/\.md$/, '')]

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by problem
    return allPostsData.sort((a, b) => {
        if (fpath == "cp")
            return (parseInt(a.id[1]) > parseInt(b.id[1])) ? 1 : -1
        else
            return (a.date < b.date) ? 1 : -1
    })
}

export function getAllPostIds(fpath) {
    const postsDirectory = path.join(process.cwd(), fpath)
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        const sep = fileName.indexOf('-')
        return {
            params: {
                id: (fpath == "cp") ? [fileName.slice(0, sep), fileName.slice(sep + 1).replace(/\.md$/, '')] : [fileName.replace(/\.md$/, '')]
            }
        }
    })
}

export async function getPostData(fpath, id) {
    const postsDirectory = path.join(process.cwd(), fpath)
    const fullPath = (fpath == "cp") ? path.join(postsDirectory, `${id[0]}-${id[1]}.md`) : path.join(postsDirectory, `${id[0]}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
        id,
        markdown: matterResult.content,
        ...matterResult.data
    }
}