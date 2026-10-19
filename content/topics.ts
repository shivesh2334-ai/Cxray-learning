import type { Topic } from '@/lib/types'
import { topicsA } from './topics-a'
import { topicsB } from './topics-b'
export const topics: Topic[] = [...topicsA, ...topicsB]
export const topicBySlug = (s: string) => topics.find((t) => t.slug === s)
