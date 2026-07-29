import Link from 'next/link'
import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
  },
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const { frontmatter, content } = getArticleBySlug(slug)

  return (
    <main className="max-w-2xl mx-auto py-24 px-6 font-mono">
      <Link href="/articles" className="text-xs text-red-400 hover:underline">
        ← all articles
      </Link>

      <article className="mt-6">
        <h1 className="text-2xl font-bold text-zinc-100">{frontmatter.title}</h1>
        {frontmatter.date && (
          <p className="text-xs text-zinc-500 mt-1">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        )}

        <div className="mt-6 prose prose-invert prose-zinc prose-sm max-w-none">
          <MDXRemote
            source={content}
            options={mdxOptions}
            components={{
              a: (props) => (
                <a {...props} className="text-xs text-red-400 hover:underline" />
              ),
            }}
          />
        </div>
      </article>
    </main>
  )
}