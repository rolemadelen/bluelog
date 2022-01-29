import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPosts(fpath) {
    const subDirectories = path.join(process.cwd(), `/posts/${fpath}`);
    const directories = fs.readdirSync(subDirectories);

    const allPosts = directories.map(dir => {
        const subDirPath = `${subDirectories}/${dir}`
        const posts = fs.readdirSync(subDirPath);
        const subPosts = posts.map(post => {
            const sep = post.indexOf('-')
            const id = (fpath == "cp") ? [post.slice(0, sep), post.slice(sep + 1).replace(/\.md$/, '')] : [post.replace(/\.md$/, '')]

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
            if (fpath=="dsa") return (a.section > b.section) ? 1 : -1
            else if (fpath == "cp") return (parseInt(a.title) > parseInt(b.title)) ? 1 : -1
            else return (a.id > b.id) ? 1 : -1
        })

        return {
            dir,
            subPosts
        }
    })

    return allPosts
}