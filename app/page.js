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
    <main className="max-w-2xl mx-auto px-6 py-16 font-mono text-zinc-300">

      <div className="flex items-start gap-12">

        <div>
          <h1 className="text-4xl font-bold text-zinc-100">Matheus Sounier</h1>
          <p className="text-sm text-zinc-500 mt-2">backend developer · Manaus, Brasil</p>
          <p className="text-sm leading-relaxed mt-4 text-zinc-400">
            I'm an 18-year-old Software Engineering student passionate about
            industrial software, Computer Vision, and LLM-powered applications backend.
            I enjoy building scalable systems that solve real-world problems, from ERP integrations to real-time vision pipelines.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/avatar.png"
            alt="Matheus dos Santos Sounier"
            width={150}
            height={150}
            className="rounded-full object-cover shrink-0"
          />

          <div className="mt-16 flex flex-row items-center justify-center sm:justify-start gap-3">
            <a
              href="https://github.com/Matheus-Sounier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>

            <a
              href="mailto:matheus.sounier2024@gmail.com"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-dos-santos-sounier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-10" />
              </svg>
            </a>

            <a
              href="https://wa.me/5592985469050"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
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
                className="font-semibold hover:text-red-400 transition-colors duration-150"
              >
                {w.company}

                <p className="text-xs text-zinc-500">
                  {w.role} · {formatPeriod(w.startDate, w.endDate)}
                </p>
                <p className="text-sm text-zinc-400 mt-1">{w.summary}</p>
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

      <footer className="border-t border-zinc-800 text-sm w-full mt-auto">
        <div className="flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4">
          <div className="flex-wrap justify-center gap-1 flex">
            <a
              href="https://github.com/Matheus-Sounier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>

            <a
              href="mailto:matheus.sounier2024@gmail.com"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-dos-santos-sounier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-10" />
              </svg>
            </a>

            <a
              href="https://wa.me/5592985469050"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Matheus Sounier
          </p>
        </div>
      </footer>
    </main>
  )
}

function Section({ title, allHref, allLabel, children }) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <h1 className="text-1x1 text-zinc-100">
          <span className="text-red-400">*</span> {title}
        </h1>
        <Link href={allHref} className="text-xs text-red-400 hover:underline">
          {allLabel} ↗
        </Link>
      </div>
      <div className="divide-y divide-zinc-900">{children}</div>
    </section>
  )
}