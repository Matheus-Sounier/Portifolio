import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const workDirectory = path.join(process.cwd(), 'content/work')

export function getAllWork() {
  const filenames = fs.readdirSync(workDirectory)

  return filenames
    .map((filename) => {
      const filePath = path.join(workDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      return { slug: filename.replace(/\.mdx?$/, ''), ...data }
    })
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
}

export function getWorkBySlug(slug) {
  const filePath = path.join(workDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  return { slug, frontmatter: data, content }
}