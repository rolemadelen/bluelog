import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts/blog')

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // [language, slug]
        const id = [fileName.slice(0, 2), fileName.slice(3).replace(/\.md$/, '')]

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            lang: id[0],
            slug: id[1],
            ...matterResult.data
        }
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: [fileName.slice(0, 2), fileName.slice(3).replace(/\.md$/, '')]
            }
        }
    })
}

export async function getPostData(id) {
    const fileNames = fs.readdirSync(postsDirectory).filter((file) => {
        return (file.slice(0, 2) != id[0]) && (file.slice(3).replace(/\.md$/, '') == id[1])
    })
    const availableLanguage = fileNames.map(file => {
       return {
           lang: file.slice(0,2),
           langName: (file.slice(0, 2) == "ko"? "한글" : (file.slice(0,2) == "en") ? "Abc" : "かな"), 
           slug: file.slice(3).replace(/\.md$/, ''),
       }
    })
    const fullPath = path.join(postsDirectory, `${id[0]}-${id[1]}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        availableLanguage,
        markdown: matterResult.content,
        ...matterResult.data
    }
}