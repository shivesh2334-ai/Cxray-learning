import type { Metadata } from 'next'
import Checklist from '@/components/Checklist'

export const metadata: Metadata = { title: 'Reading checklist' }

export default function Read() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Reading checklist</h1>
        <p className="prose-kb mt-2 max-w-prose text-mute">
          Judge the technical quality first, then search the film in one fixed order. Tick each step as you go; the
          ABCDEFGHI mnemonic (Airway, Bones &amp; soft tissue, Cardiac, Diaphragm, Effusion, Fields/fissures/foreign
          bodies, Great vessels, Hila &amp; lung, Impression) is a good alternative if you prefer letters.
        </p>
      </header>
      <Checklist />
    </div>
  )
}
