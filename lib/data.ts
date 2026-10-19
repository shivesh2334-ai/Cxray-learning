import { topics } from '@/content/topics'
import { images } from '@/content/images'
import { questions } from '@/content/quiz'
import { MODULES } from '@/lib/types'

export { topics, images, questions, MODULES }
export const imagesFor = (slug: string) => images.filter((i) => i.topic === slug)
export const questionsFor = (slug: string) => questions.filter((q) => q.topic === slug)
export const topicTitle = (slug: string) => topics.find((t) => t.slug === slug)?.title ?? slug
export const ESR_CITATION =
  'European Society of Radiology; Becker M, Cohen J, Deux J-F, Snoeckx A (2025). ESR Modern Radiology eBook: Chest Imaging. DOI 10.26044/esr-modern-radiology-12'
