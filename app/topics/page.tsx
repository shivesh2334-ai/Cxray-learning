import Link from 'next/link'
import type { Metadata } from 'next'
import { imagesFor, questionsFor, topics, MODULES } from '@/lib/data'

export const metadata: Metadata = { title: 'Topics' }

export default function Topics() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Topics</h1>
        <p className="prose-kb mt-2 max-w-prose text-mute">Each topic has the core knowledge, key points and pitfalls, linked figures from the image bank and practice questions.</p>
      </header>
      {MODULES.map((m) => (
        <section key={m} aria-labelledby={m}>
          <h2 id={m} className="mb-3 text-xl font-semibold text-teal-dark">{m}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {topics.filter((t) => t.module === m).map((t) => (
              <li key={t.slug}>
                <Link href={`/topics/${t.slug}`} className="block h-full rounded border border-line bg-paper p-4 hover:border-teal">
                  <span className="block font-semibold">{t.title}</span>
                  <span className="mt-1 block text-sm text-mute">{t.summary}</span>
                  <span className="mt-2 block text-xs text-teal">{imagesFor(t.slug).length} images · {questionsFor(t.slug).length} questions · ESR pp.{t.pages}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
