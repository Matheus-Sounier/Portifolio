import Link from 'next/link'

export function ArticleCard({ article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="flex gap-4 py-2 text-sm font-mono text-zinc-200 hover:text-red-400 transition-colors duration-150"
    >
      <span className="text-zinc-600 w-24 shrink-0">
        {new Date(article.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </span>
      <span>{article.title}</span>
    </Link>
  )
}