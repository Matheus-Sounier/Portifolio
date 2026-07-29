import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects() {
  const filenames = fs.readdirSync(projectsDirectory)

  return filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(/\.mdx?$/, ''),
      ...data,
    }
  })
}

export function getProjectBySlug(slug) {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return { slug, frontmatter: data, content }
}