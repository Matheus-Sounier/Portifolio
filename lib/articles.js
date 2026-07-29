import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export function getAllArticles() {
  const filenames = fs.readdirSync(articlesDirectory)

  return filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(/\.mdx?$/, ''),
      ...data,
    }
  })
}

export function getArticleBySlug(slug) {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return { slug, frontmatter: data, content }
}

export function getLatestArticles(limit = 4) {
  return getAllArticles()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export function daysSinceLastPost() {
  const [latest] = getAllArticles().sort((a, b) => new Date(b.date) - new Date(a.date))
  if (!latest) return null
  const diff = Date.now() - new Date(latest.date).getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}