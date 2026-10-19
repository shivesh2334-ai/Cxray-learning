import type { Metadata } from 'next'
import ImageBank from '@/components/ImageBank'
import { images, topics } from '@/lib/data'

export const metadata: Metadata = { title: 'Image bank' }

export default function Images() {
  const used = topics.filter((t) => images.some((i) => i.topic === t.slug)).map((t) => ({ slug: t.slug, title: t.title }))
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold">Image bank</h1>
        <p className="prose-kb mt-2 max-w-prose text-mute">Annotated radiographs, CT, MRI, PET/CT and diagrams from the chapter. Open an image to enlarge it; use the arrow keys to move through the set.</p>
      </header>
      <ImageBank items={images} topics={used} />
    </div>
  )
}
