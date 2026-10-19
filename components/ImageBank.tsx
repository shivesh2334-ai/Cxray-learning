'use client'
import { useMemo, useState } from 'react'
import type { ImageItem } from '@/lib/types'
import Lightbox from './Lightbox'

type Props = { items: ImageItem[]; topics?: { slug: string; title: string }[]; filters?: boolean }

export default function ImageBank({ items, topics = [], filters = true }: Props) {
  const [topic, setTopic] = useState('all')
  const [modality, setModality] = useState('all')
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<number | null>(null)

  const modalities = useMemo(() => Array.from(new Set(items.map((i) => i.modality))).sort(), [items])
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return items.filter(
      (i) =>
        (topic === 'all' || i.topic === topic) &&
        (modality === 'all' || i.modality === modality) &&
        (!needle || i.caption.toLowerCase().includes(needle) || i.modality.toLowerCase().includes(needle)),
    )
  }, [items, topic, modality, q])

  return (
    <div>
      {filters && (
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-mute">Topic
            <select value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-1 w-full rounded border border-line bg-paper px-2 py-2 text-ink">
              <option value="all">All topics</option>
              {topics.map((t) => <option key={t.slug} value={t.slug}>{t.title}</option>)}
            </select>
          </label>
          <label className="text-sm text-mute">Type of image
            <select value={modality} onChange={(e) => setModality(e.target.value)} className="mt-1 w-full rounded border border-line bg-paper px-2 py-2 text-ink">
              <option value="all">All types</option>
              {modalities.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </label>
          <label className="text-sm text-mute">Search captions
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Kerley, silhouette, teratoma" className="mt-1 w-full rounded border border-line bg-paper px-2 py-2 text-ink" />
          </label>
        </div>
      )}
      <p className="mb-3 text-sm text-mute">{shown.length} image{shown.length === 1 ? '' : 's'}</p>
      {shown.length === 0 ? (
        <p className="rounded border border-line bg-paper p-6 text-mute">No images match. Clear a filter or try a different word.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((it, idx) => (
            <li key={it.id}>
              <button onClick={() => setOpen(idx)} className="group block w-full overflow-hidden rounded border border-line bg-paper text-left">
                <span className="film flex aspect-[4/3] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.src} alt={it.caption} loading="lazy" className="max-h-full max-w-full object-contain" />
                </span>
                <span className="block p-2">
                  <span className="block text-xs text-teal">{it.modality} · p.{it.page}</span>
                  <span className="line-clamp-2 block text-[0.85rem] leading-snug text-ink">{it.caption}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {open !== null && <Lightbox items={shown} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </div>
  )
}
