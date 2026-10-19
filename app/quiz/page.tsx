import type { Metadata } from 'next'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = { title: 'Quiz' }

export default function QuizPage({ searchParams }: { searchParams: { topic?: string } }) {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-3xl font-bold">Quiz</h1>
        <p className="prose-kb mt-2 max-w-prose text-mute">Single- and multiple-answer questions with image-based items. Each answer is explained and linked to its topic.</p>
      </header>
      <Quiz initialTopic={searchParams.topic ?? 'all'} />
    </div>
  )
}
