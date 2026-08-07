import Link from 'next/link'
import { getLatestArticles, daysSinceLastPost } from '@/lib/articles'
import { getAllWork } from '@/lib/works'
import { getAllProjects } from '@/lib/projects'
import { ArticleCard } from '@/app/components/ArticleCard'
import { ProjectCard } from '@/app/components/ProjectCard'

function formatPeriod(start, end) {
  const opts = { month: 'short', year: 'numeric' }
  const startLabel = new Date(start).toLocaleDateString('en-US', opts)
  const endLabel = end ? new Date(end).toLocaleDateString('en-US', opts) : 'present'
  return `${startLabel} - ${endLabel}`
}

export default function Home() {
  const articles = getLatestArticles(4)
  const work = getAllWork().slice(0, 3)
  const projects = getAllProjects().slice(0, 2)
  const daysSince = daysSinceLastPost()

  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-8 font-mono text-zinc-700 dark:text-zinc-300">

      <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-12 items-center sm:items-start">

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Matheus Sounier</h1>
          <p className="text-sm sm:text-base text-zinc-500 mt-2">backend developer · Manaus, Brasil</p>
          <p className="text-sm sm:text-base leading-relaxed mt-4 text-zinc-600 dark:text-zinc-400">
            I'm an 18-year-old Software Engineering student passionate about Industry 4.0 technologies,
            including industrial software, IoT, Computer Vision, and LLM-powered systems.
            I enjoy designing solutions that integrate ERPs, connected devices,
            real-time vision to solve real industrial challenges.
          </p>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <img
            src="/avatar.png"
            alt="Matheus dos Santos Sounier"
            className="rounded-full object-cover shrink-0 w-36 h-36 sm:w-[200px] sm:h-[200px]"
          />
        </div>

      </div>

      <Section title="Articles" allHref="/articles" allLabel="All articles">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </Section>

      <Section title="Works" allHref="/works" allLabel="All works">
        {work.map((w) => (
          <div key={w.slug} className="py-3">
            <div key={w.slug} className="py-3">
              <Link
                href={`/works/${w.slug}`}
                className="font-semibold hover:text-red-500 dark:hover:text-red-400 transition-colors duration-150"
              >
                {w.company}

                <p className="text-xs text-zinc-500">
                  {w.role} · {formatPeriod(w.startDate, w.endDate)}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{w.summary}</p>
              </Link>
            </div>
          </div>

        ))}
      </Section>

      <Section title="Projects" allHref="/projects" allLabel="All projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Section>
    </main>
  )
}

function Section({ title, allHref, allLabel, children }) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <h1 className="text-xl text-zinc-900 dark:text-zinc-100 font-bold">
          <span className="text-red-500 dark:text-red-400">*</span> {title}
        </h1>
        <Link href={allHref} className="text-xs text-red-500 dark:text-red-400 hover:underline">
          {allLabel} ↗
        </Link>
      </div>
      <div className="divide-y divide-zinc-200 dark:divide-zinc-900">{children}</div>
    </section>
  )
}