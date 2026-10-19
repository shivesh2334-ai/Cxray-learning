'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { questions, topics, topicTitle } from '@/lib/data'
import type { Question } from '@/lib/types'
import { loadProgress, resetProgress, saveProgress, type Progress } from '@/lib/progress'

function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}
const same = (a: number[], b: number[]) => a.length === b.length && [...a].sort().join() === [...b].sort().join()

export default function Quiz({ initialTopic = 'all' }: { initialTopic?: string }) {
  const [phase, setPhase] = useState<'setup' | 'run' | 'done'>('setup')
  const [topic, setTopic] = useState(initialTopic)
  const [count, setCount] = useState(10)
  const [deck, setDeck] = useState<Question[]>([])
  const [idx, setIdx] = useState(0)
  const [sel, setSel] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<{ q: Question; ok: boolean }[]>([])
  const [progress, setProgress] = useState<Progress>({ answers: {} })

  useEffect(() => setProgress(loadProgress()), [])

  const pool = useMemo(() => (topic === 'all' ? questions : questions.filter((q) => q.topic === topic)), [topic])
  const mastery = (slug: string) => {
    const qs = questions.filter((q) => q.topic === slug)
    if (!qs.length) return null
    const right = qs.filter((q) => progress.answers[q.id] === true).length
    return Math.round((right / qs.length) * 100)
  }

  function start() {
    const d = shuffle(pool).slice(0, count >= pool.length ? pool.length : count)
    setDeck(d); setIdx(0); setSel([]); setChecked(false); setResults([]); setPhase('run')
  }
  const q = deck[idx]

  function toggle(i: number) {
    if (checked) return
    if (q.type === 'single') setSel([i])
    else setSel((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))
  }
  function check() {
    const ok = same(sel, q.answer)
    setChecked(true)
    setResults((r) => [...r, { q, ok }])
    const next = { answers: { ...progress.answers, [q.id]: ok } }
    setProgress(next); saveProgress(next)
  }
  function next() {
    if (idx + 1 >= deck.length) { setPhase('done'); return }
    setIdx(idx + 1); setSel([]); setChecked(false)
  }

  if (phase === 'setup') {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-mute">Topic
            <select value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-1 w-full rounded border border-line bg-paper px-2 py-2 text-ink">
              <option value="all">All topics ({questions.length} questions)</option>
              {topics.filter((t) => questions.some((x) => x.topic === t.slug)).map((t) => (
                <option key={t.slug} value={t.slug}>{t.title} ({questions.filter((x) => x.topic === t.slug).length})</option>
              ))}
            </select>
          </label>
          <label className="text-sm text-mute">Number of questions
            <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="mt-1 w-full rounded border border-line bg-paper px-2 py-2 text-ink">
              <option value={5}>5</option><option value={10}>10</option><option value={20}>20</option><option value={999}>All available</option>
            </select>
          </label>
        </div>
        <button onClick={start} disabled={!pool.length} className="rounded bg-teal px-5 py-2.5 font-medium text-white hover:bg-teal-dark disabled:opacity-50">
          Start quiz ({Math.min(count, pool.length)} questions)
        </button>
        <section aria-labelledby="mastery">
          <h2 id="mastery" className="mb-2 text-lg font-semibold">Your progress by topic</h2>
          <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {topics.map((t) => {
              const m = mastery(t.slug)
              if (m === null) return null
              return (
                <li key={t.slug} className="flex items-center justify-between gap-3 border-b border-line py-1.5 text-sm">
                  <span>{t.title}</span>
                  <span className={m === 100 ? 'text-ok' : 'text-mute'}>{m}% correct</span>
                </li>
              )
            })}
          </ul>
          <button onClick={() => { resetProgress(); setProgress({ answers: {} }) }} className="mt-3 text-sm text-mute underline">Reset my progress</button>
        </section>
      </div>
    )
  }

  if (phase === 'done') {
    const score = results.filter((r) => r.ok).length
    const missed = results.filter((r) => !r.ok)
    return (
      <div className="space-y-5">
        <p className="text-2xl font-semibold">{score} of {results.length} correct ({Math.round((score / Math.max(1, results.length)) * 100)}%)</p>
        {missed.length > 0 ? (
          <div>
            <h2 className="mb-2 text-lg font-semibold">Review these topics</h2>
            <ul className="space-y-2">
              {missed.map(({ q: mq }) => (
                <li key={mq.id} className="rounded border border-line bg-paper p-3 text-sm">
                  <p className="font-medium">{mq.stem}</p>
                  <p className="mt-1 text-mute">{mq.explanation}</p>
                  <Link className="mt-1 inline-block text-teal underline" href={`/topics/${mq.topic}`}>{topicTitle(mq.topic)}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : <p className="text-ok">Perfect round.</p>}
        <div className="flex gap-3">
          <button onClick={start} className="rounded bg-teal px-4 py-2 text-white hover:bg-teal-dark">Another round</button>
          <button onClick={() => setPhase('setup')} className="rounded border border-line bg-paper px-4 py-2">Change settings</button>
        </div>
      </div>
    )
  }

  const correct = checked && same(sel, q.answer)
  return (
    <div className="space-y-4">
      <p className="text-sm text-mute">Question {idx + 1} of {deck.length} · {topicTitle(q.topic)}</p>
      <h2 className="text-xl font-semibold leading-snug">{q.stem}</h2>
      {q.images && (
        <div className="film flex flex-wrap items-center justify-center gap-2 rounded p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {q.images.map((s) => <img key={s} src={s} alt="Question figure" className="max-h-[420px] max-w-full object-contain" />)}
        </div>
      )}
      <p className="text-sm text-mute">{q.type === 'multi' ? 'Select all that apply.' : 'Select one answer.'}</p>
      <ul className="space-y-2">
        {q.options.map((o, i) => {
          const picked = sel.includes(i)
          const isAns = q.answer.includes(i)
          let cls = 'border-line bg-paper hover:border-teal'
          if (picked && !checked) cls = 'border-teal bg-teal-soft'
          if (checked && isAns) cls = 'border-ok bg-green-50'
          if (checked && picked && !isAns) cls = 'border-bad bg-red-50'
          return (
            <li key={i}>
              <button onClick={() => toggle(i)} aria-pressed={picked} className={`flex w-full items-start gap-3 rounded border px-3 py-2.5 text-left ${cls}`}>
                <span aria-hidden className={`mt-0.5 inline-block h-4 w-4 shrink-0 border ${q.type === 'multi' ? 'rounded-sm' : 'rounded-full'} ${picked ? 'bg-teal border-teal' : 'border-mute'}`} />
                <span>{o}{checked && isAns ? <span className="ml-2 text-sm text-ok">correct</span> : null}{checked && picked && !isAns ? <span className="ml-2 text-sm text-bad">not correct</span> : null}</span>
              </button>
            </li>
          )
        })}
      </ul>
      {!checked ? (
        <button onClick={check} disabled={!sel.length} className="rounded bg-teal px-5 py-2.5 font-medium text-white hover:bg-teal-dark disabled:opacity-50">Check answer</button>
      ) : (
        <div className="space-y-3 rounded border border-line bg-paper p-4">
          <p className={`font-semibold ${correct ? 'text-ok' : 'text-bad'}`}>{correct ? 'Correct' : 'Not quite'}</p>
          <p className="prose-kb">{q.explanation}</p>
          {q.revealImages && (
            <div className="film flex flex-wrap justify-center gap-2 rounded p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {q.revealImages.map((s) => <img key={s} src={s} alt="Answer figure" className="max-h-[420px] max-w-full object-contain" />)}
            </div>
          )}
          <p className="text-sm text-mute">ESR chapter pages: {q.page ?? '—'} · <Link className="text-teal underline" href={`/topics/${q.topic}`}>Open topic</Link></p>
          <button onClick={next} className="rounded bg-teal px-5 py-2 font-medium text-white hover:bg-teal-dark">{idx + 1 >= deck.length ? 'See results' : 'Next question'}</button>
        </div>
      )}
    </div>
  )
}
