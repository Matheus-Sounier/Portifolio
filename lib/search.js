import { getAllArticles } from './articles'
import { getAllWork } from './works'
import { getAllProjects } from './projects'

export function getSearchIndex() {
  const articles = getAllArticles().map((a) => ({
    id: `article-${a.slug}`,
    title: a.title,
    type: 'article',
    href: `/articles/${a.slug}`,
    external: false,
  }))

  const work = getAllWork().map((w) => ({
    id: `work-${w.slug}`,
    title: w.company,
    type: 'work',
    href: `/works/${w.slug}`,
    external: false,
  }))

  const projects = getAllProjects().map((p) => ({
    id: `project-${p.slug}`,
    title: p.title,
    type: 'project',
    href: p.github || `/projects/${p.slug}`,
    external: Boolean(p.github),
  }))

  return [...articles, ...work, ...projects]
}