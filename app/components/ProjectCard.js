export function ProjectCard({ project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start justify-between gap-4 py-4 group"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-mono font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">
            {project.title}
          </h2>

          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.role && (
          <p className="text-xs font-mono text-zinc-500 mt-1">{project.role}</p>
        )}

        {project.description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">{project.description}</p>
        )}
      </div>

      <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-red-500 dark:group-hover:text-red-400 shrink-0 mt-1 text-sm transition-colors duration-200">
        ↗
      </span>
    </a>
  )
}