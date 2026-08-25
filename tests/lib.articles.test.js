import { getAllArticles, getArticleBySlug, getLatestArticles, daysSinceLastPost } from '../lib/articles'
import fs from 'fs'
import path from 'path'

describe('articles lib', () => {
  it('reads article directory', () => {
    const articles = getAllArticles()
    expect(Array.isArray(articles)).toBe(true)
  })

  it('getArticleBySlug returns content for existing file', () => {
    const files = fs.readdirSync(path.join(process.cwd(), 'content/articles'))
    const first = files.find((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    if (!first) return
    const slug = first.replace(/\.mdx?$/, '')
    const res = getArticleBySlug(slug)
    expect(res).toHaveProperty('slug')
    expect(res).toHaveProperty('frontmatter')
  })

  it('getLatestArticles returns array', () => {
    const latest = getLatestArticles(2)
    expect(Array.isArray(latest)).toBe(true)
  })

  it('daysSinceLastPost is number or null', () => {
    const d = daysSinceLastPost()
    expect([null].concat(Array.from({ length: 100 }, (_, i) => i))).toContain(d)
  })
})
