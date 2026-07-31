import { getAllWork } from '@/lib/works'
import { WorkCard } from '@/app/components/WorkCard'

export default function WorkPage() {
  const work = getAllWork()

  return (
    <main className="w-full max-w-3xl mx-auto py-8 px-6">
      <h1 className="text-xl text-zinc-900 dark:text-zinc-100 mb-4 font-bold">
        <span className="text-red-500 dark:text-red-400">*</span> Works
      </h1>
      <div className="grid gap-4">
        {work.map((w) => (
          <WorkCard key={w.slug} work={w} />
        ))}
      </div>
    </main>
  )
}