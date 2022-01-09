import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'cp')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const title = fileName;
        const sep = fileName.indexOf('-')
        const id = [fileName.slice(0, sep), fileName.slice(sep+1).replace(/\.md$/, '')]

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            title,
            ...matterResult.data
        }
    })
    // Sort posts by problem
    return allPostsData.sort((a, b) => {
        if ( parseInt(a.id[1]) > parseInt(b.id[1])) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        const sep = fileName.indexOf('-')
        return {
            params: {
                id: [fileName.slice(0, sep), fileName.slice(sep+1).replace(/\.md$/, '')]
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id[0]}-${id[1]}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id and contentHtml
    return {
        id,
        markdown: matterResult.content,
        ...matterResult.data
    }
}