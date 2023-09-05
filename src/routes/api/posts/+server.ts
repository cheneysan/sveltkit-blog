import {json} from '@sveltejs/kit'

async function getPosts() {
    let posts = []
    const paths = import.meta.glob('/src/posts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')
        const metadata = file.metadata
        const post = { ...metadata, slug }
        if (post.published) {
            posts.push(post)
        }
    }

    posts = posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}