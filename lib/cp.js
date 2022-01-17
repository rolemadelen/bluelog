import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), "/posts/cp")
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const sep = fileName.indexOf('-')
        const id = [fileName.slice(0, sep), fileName.slice(sep + 1).replace(/\.md$/, '')]

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
        return (parseInt(a.id[1]) > parseInt(b.id[1])) ? 1 : -1
    })
}

export function getAllPostIds() {
    const postsDirectory = path.join(process.cwd(), "/posts/cp")
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        const sep = fileName.indexOf('-')
        return {
            params: {
                id: [fileName.slice(0, sep), fileName.slice(sep + 1).replace(/\.md$/, '')]
            }
        }
    })
}

export async function getPostData(id) {
    const postsDirectory = path.join(process.cwd(), "/posts/cp")
    const fullPath = path.join(postsDirectory, `${id[0]}-${id[1]}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
        id,
        markdown: matterResult.content,
        ...matterResult.data
    }
}