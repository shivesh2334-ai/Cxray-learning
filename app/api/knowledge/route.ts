import { NextResponse } from 'next/server'
import { topics, images, questions, ESR_CITATION } from '@/lib/data'

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.json({
    source: ESR_CITATION,
    license: 'CC BY-NC-ND 4.0 (ESR Modern Radiology eBook). Non-commercial educational use.',
    topics,
    images,
    questions,
  })
}
