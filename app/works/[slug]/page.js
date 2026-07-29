import Link from 'next/link'
import { getWorkBySlug, getAllWork } from '@/lib/works'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

export function generateStaticParams() {
  return getAllWork().map((work) => ({ slug: work.slug }))
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
  },
}

export default async function WorkPage({ params }) {
  const { slug } = await params
  const { frontmatter, content } = getWorkBySlug(slug)

  return (
    <main className="max-w-2xl mx-auto py-8 px-6 font-mono">
      <Link href="/works" className="text-xs text-red-500 dark:text-red-400 hover:underline">
        ← all works
      </Link>

      <article className="mt-6">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{frontmatter.company}</h1>
        {frontmatter.startDate && (
          <p className="text-xs text-zinc-500 mt-1">
            {new Date(frontmatter.startDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        )}

        <div className="mt-6 prose dark:prose-invert prose-zinc prose-sm max-w-none">
          <MDXRemote
            source={content}
            options={mdxOptions}
            components={{
              a: (props) => (
                <a
                  {...props}
                  className="text-xs text-red-500 dark:text-red-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </div>
      </article>
    </main>
  )
}