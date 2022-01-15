import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPosts() {
    const subDirectories = path.join(process.cwd(), `/posts/ds`);
    const directories = fs.readdirSync(subDirectories);

    const allPosts = directories.map(dir => {
        const subDirPath = `${subDirectories}/${dir}`
        const posts = fs.readdirSync(subDirPath);
        const subPosts = posts.map(post => {
            const id = [post.replace(/\.md$/, '')]

            // Read markdown file as string
            const fullPath = path.join(subDirPath, post);
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents)

            return {
                id,
                ...matterResult.data
            }
        })
        .sort((a,b) => {
            return (a.section > b.section) ? 1 : -1
        })

        return {
            dir,
            subPosts
        }
    })

    return allPosts
}