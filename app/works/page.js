import { getAllWork } from '@/lib/work'
import { WorkCard } from '@/app/components/WorkCard'

export default function WorkPage() {
  const work = getAllWork()

  return (
    <main className="max-w-2xl mx-auto py-24 px-6">
      <h1 className="text-1x1 text-zinc-100 mb-4">
        <span className="text-red-400">*</span> Works
      </h1>
      <div className="grid gap-4">
        {work.map((w) => (
          <WorkCard key={w.slug} work={w} />
        ))}
      </div>
    </main>
  )
}