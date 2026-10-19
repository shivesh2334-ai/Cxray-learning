import type { Metadata } from 'next'
import KbSearch from '@/components/KbSearch'

export const metadata: Metadata = { title: 'Knowledge base' }

export default function Knowledge() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold">Knowledge base</h1>
        <p className="prose-kb mt-2 max-w-prose text-mute">
          Every fact in the app lives in structured content files. Search them here, or download the whole base as{' '}
          <a className="text-teal underline" href="/api/knowledge">JSON</a> for reuse in other tools.
        </p>
      </header>
      <KbSearch />
    </div>
  )
}
