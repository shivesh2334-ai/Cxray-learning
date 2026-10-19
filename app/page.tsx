import Link from 'next/link'
import { images, questions, topics, MODULES } from '@/lib/data'

// positions are percentages of the image box (patient's right is on the left of the film)
const steps = [
  { n: 1, label: 'Soft tissues', x: 8, y: 45 },
  { n: 2, label: 'Bones', x: 78, y: 28 },
  { n: 3, label: 'Pleura', x: 12, y: 73 },
  { n: 4, label: 'Diaphragm', x: 33, y: 78 },
  { n: 5, label: 'Lungs', x: 24, y: 38 },
  { n: 6, label: 'Hila', x: 36, y: 52 },
  { n: 7, label: 'Mediastinum', x: 46, y: 18 },
  { n: 8, label: 'Heart', x: 56, y: 62 },
]

export default function Home() {
  const hero = images.find((i) => i.id === 'p26-20')
  return (
    <div className="space-y-14">
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Read every chest film in the same order.</h1>
          <p className="prose-kb mt-4 max-w-prose text-mute">
            Learn the techniques, the normal anatomy and the abnormal patterns of the chest radiograph, topic by topic,
            then test yourself on real images. Built from the ESR Modern Radiology eBook chapter on chest imaging.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/read" className="rounded bg-teal px-5 py-2.5 font-medium text-white hover:bg-teal-dark">Open the reading checklist</Link>
            <Link href="/quiz" className="rounded border border-teal px-5 py-2.5 font-medium text-teal hover:bg-teal-soft">Take a quiz</Link>
          </div>
          <dl className="mt-8 flex gap-8 text-sm text-mute">
            <div><dt>Topics</dt><dd className="text-2xl font-semibold text-ink">{topics.length}</dd></div>
            <div><dt>Annotated images</dt><dd className="text-2xl font-semibold text-ink">{images.length}</dd></div>
            <div><dt>Quiz questions</dt><dd className="text-2xl font-semibold text-ink">{questions.length}</dd></div>
          </dl>
        </div>
        <Link href="/read" aria-label="Open the reading checklist" className="film flex justify-center overflow-hidden rounded">
          <span className="relative inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {hero && <img src={hero.src} alt="Normal PA chest radiograph with the eight steps of the reading sequence marked" className="block max-h-[520px] w-auto max-w-full" />}
            {steps.map((s) => (
              <span key={s.n} className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap text-xs font-semibold text-white" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-marker text-film shadow">{s.n}</span>
                <span className="hidden rounded bg-film/75 px-1.5 py-0.5 md:inline">{s.label}</span>
              </span>
            ))}
          </span>
        </Link>
      </section>

      <section aria-labelledby="modules">
        <h2 id="modules" className="mb-4 text-2xl font-semibold">Work through the chapter</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => {
            const list = topics.filter((t) => t.module === m)
            return (
              <div key={m} className="rounded border border-line bg-paper p-4">
                <h3 className="mb-2 font-semibold text-teal-dark">{m}</h3>
                <ul className="space-y-1 text-[0.93rem]">
                  {list.map((t) => (
                    <li key={t.slug}><Link className="hover:text-teal hover:underline" href={`/topics/${t.slug}`}>{t.title}</Link></li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
