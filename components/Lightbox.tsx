'use client'
import { useEffect } from 'react'
import type { ImageItem } from '@/lib/types'
import { topicTitle } from '@/lib/data'

export default function Lightbox({
  items, index, onClose, onIndex,
}: { items: ImageItem[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const it = items[index]
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [index, items.length, onClose, onIndex])
  if (!it) return null
  return (
    <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex flex-col bg-film/95">
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-white/80">
        <span>{index + 1} / {items.length} · {it.modality} · ESR p.{it.page}</span>
        <button onClick={onClose} className="rounded border border-white/30 px-3 py-1 hover:bg-white/10">Close</button>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center px-2">
        <button aria-label="Previous image" onClick={() => onIndex((index - 1 + items.length) % items.length)} className="px-3 py-6 text-3xl text-white/70 hover:text-white">‹</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={it.src} alt={it.caption} className="max-h-full max-w-full object-contain" />
        <button aria-label="Next image" onClick={() => onIndex((index + 1) % items.length)} className="px-3 py-6 text-3xl text-white/70 hover:text-white">›</button>
      </div>
      <div className="px-4 py-4 text-white">
        <p className="mx-auto max-w-3xl text-[0.98rem]">{it.caption}</p>
        <p className="mx-auto mt-1 max-w-3xl text-sm text-white/60">Topic: {topicTitle(it.topic)}</p>
      </div>
    </div>
  )
}
