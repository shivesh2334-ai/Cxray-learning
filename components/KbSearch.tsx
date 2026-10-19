'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { topics } from '@/lib/data'

type Hit = { topic: string; slug: string; heading: string; text: string; pages: string }

export default function KbSearch() {
  const [q, setQ] = useState('')
  const all = useMemo<Hit[]>(() => {
    const out: Hit[] = []
    for (const t of topics) {
      out.push({ topic: t.title, slug: t.slug, heading: 'Summary', text: t.summary, pages: t.pages })
      for (const s of t.sections) for (const p of s.points) out.push({ topic: t.title, slug: t.slug, heading: s.heading, text: p, pages: t.pages })
      for (const p of t.pearls) out.push({ topic: t.title, slug: t.slug, heading: 'Key point', text: p, pages: t.pages })
      for (const p of t.pitfalls ?? []) out.push({ topic: t.title, slug: t.slug, heading: 'Pitfall', text: p, pages: t.pages })
      if (t.mnemonic) out.push({ topic: t.title, slug: t.slug, heading: `Mnemonic: ${t.mnemonic.name}`, text: t.mnemonic.text, pages: t.pages })
    }
    return out
  }, [])
  const words = q.toLowerCase().split(/\s+/).filter(Boolean)
  const hits = words.length ? all.filter((h) => words.every((w) => (h.text + ' ' + h.heading + ' ' + h.topic).toLowerCase().includes(w))) : []
  return (
    <div>
      <label className="block text-sm text-mute">Search the knowledge base
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Kerley, tension, thymoma, VDT, doughnut" className="mt-1 w-full rounded border border-line bg-paper px-3 py-2.5 text-ink" />
      </label>
      <div className="mt-4 space-y-3" aria-live="polite">
        {!words.length && <p className="text-mute">Type a term to search all {all.length} facts across {topics.length} topics.</p>}
        {words.length > 0 && hits.length === 0 && <p className="text-mute">Nothing found for “{q}”. Try a shorter or different term.</p>}
        {hits.slice(0, 60).map((h, i) => (
          <article key={i} className="rounded border border-line bg-paper p-3">
            <p className="text-sm text-mute"><Link href={`/topics/${h.slug}`} className="text-teal underline">{h.topic}</Link> · {h.heading} · ESR pp.{h.pages}</p>
            <p className="prose-kb mt-1">{h.text}</p>
          </article>
        ))}
        {hits.length > 60 && <p className="text-sm text-mute">Showing the first 60 of {hits.length} matches. Add another word to narrow the search.</p>}
      </div>
    </div>
  )
}
