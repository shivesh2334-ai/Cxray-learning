import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { imagesFor, questionsFor, topics } from '@/lib/data'
import ImageBank from '@/components/ImageBank'

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }))
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = topics.find((x) => x.slug === params.slug)
  return { title: t?.title ?? 'Topic', description: t?.summary }
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const i = topics.findIndex((t) => t.slug === params.slug)
  if (i < 0) notFound()
  const t = topics[i]
  const imgs = imagesFor(t.slug)
  const qn = questionsFor(t.slug).length
  const prev = topics[i - 1]
  const next = topics[i + 1]
  return (
    <article className="space-y-8">
      <header>
        <p className="text-sm text-mute">{t.module} · ESR chapter pp.{t.pages}</p>
        <h1 className="mt-1 text-3xl font-bold leading-tight sm:text-4xl">{t.title}</h1>
        <p className="prose-kb mt-3 max-w-prose text-lg">{t.summary}</p>
        {qn > 0 && (
          <Link href={`/quiz?topic=${t.slug}`} className="mt-4 inline-block rounded bg-teal px-4 py-2 text-white hover:bg-teal-dark">Practise this topic ({qn} questions)</Link>
        )}
      </header>

      {t.mnemonic && (
        <aside className="rounded border-l-4 border-marker bg-paper p-4">
          <p className="font-semibold">{t.mnemonic.name}</p>
          <p className="prose-kb">{t.mnemonic.text}</p>
        </aside>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-7">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-2 text-xl font-semibold">{s.heading}</h2>
              <ul className="prose-kb list-disc space-y-2 pl-5">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </section>
          ))}
        </div>
        <aside className="space-y-5">
          <section className="rounded border border-line bg-paper p-4">
            <h2 className="mb-2 font-semibold">Key points</h2>
            <ul className="space-y-2 text-[0.95rem]">{t.pearls.map((p) => <li key={p} className="border-l-4 border-marker pl-3">{p}</li>)}</ul>
          </section>
          {t.pitfalls && (
            <section className="rounded border border-line bg-paper p-4">
              <h2 className="mb-2 font-semibold">Common pitfalls</h2>
              <ul className="list-disc space-y-1 pl-5 text-[0.95rem]">{t.pitfalls.map((p) => <li key={p}>{p}</li>)}</ul>
            </section>
          )}
        </aside>
      </div>

      {imgs.length > 0 && (
        <section aria-labelledby="figs">
          <h2 id="figs" className="mb-3 text-xl font-semibold">Images for this topic</h2>
          <ImageBank items={imgs} filters={false} />
        </section>
      )}

      <nav className="flex justify-between gap-4 border-t border-line pt-4 text-sm" aria-label="Topic navigation">
        {prev ? <Link className="text-teal underline" href={`/topics/${prev.slug}`}>Previous: {prev.title}</Link> : <span />}
        {next ? <Link className="text-right text-teal underline" href={`/topics/${next.slug}`}>Next: {next.title}</Link> : <span />}
      </nav>
    </article>
  )
}
