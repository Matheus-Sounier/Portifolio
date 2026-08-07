import Link from 'next/link'

function formatPeriod(start, end) {
  const opts = { month: 'short', year: 'numeric' }
  const startLabel = new Date(start).toLocaleDateString('en-US', opts)
  const endLabel = end ? new Date(end).toLocaleDateString('en-US', opts) : 'present'
  return `${startLabel} - ${endLabel}`
}

export function WorkCard({ work }) {
  return (
    <Link href={`/works/${work.slug}`} className="block py-4 group">
      <div className="flex items-start justify-between gap-4 text-zinc-900 dark:text-zinc-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-150">
        <h2 className="font-mono font-bold">{work.company}</h2>
        <span className="text-sm group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-150 mt-1">↗</span>
      </div>

      <p className="text-xs font-mono text-zinc-500 mt-1">
        {work.role} · {formatPeriod(work.startDate, work.endDate)}
      </p>

      {work.summary && (
        <p className="text-sm font-mono text-zinc-800 dark:text-zinc-100 mt-2">{work.summary}</p>
      )}
    </Link>
  )
}