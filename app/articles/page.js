import { getAllArticles } from '@/lib/articles'
import { ArticleCard } from '@/app/components/ArticleCard'

export default function ArticlesPage() {
  const articles = getAllArticles().sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <main className="max-w-2xl mx-auto py-8 px-6">
      <h1 className="text-1xl text-zinc-100 mb-4 ">
        <span className="text-red-400">*</span> Articles
      </h1>
      <div className="divide-y divide-zinc-900">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  )
}