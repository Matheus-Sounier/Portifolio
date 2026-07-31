import { getAllProjects } from '@/lib/projects'
import { ProjectCard } from '@/app/components/ProjectCard'

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main className="w-full max-w-3xl mx-auto py-8 px-6">
      <h1 className="text-xl text-zinc-900 dark:text-zinc-100 mb-4 font-bold">
        <span className="text-red-500 dark:text-red-400">*</span> Projects
      </h1>
      <div className="divide-y divide-zinc-200 dark:divide-zinc-900">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}