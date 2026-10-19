'use client'
const KEY = 'cxr-learning-progress-v1'
export type Progress = { answers: Record<string, boolean> } // questionId -> last answer correct?

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw) as Progress
  } catch {}
  return { answers: {} }
}
export function saveProgress(p: Progress) {
  try { localStorage.setItem(KEY, JSON.stringify(p)) } catch {}
}
export function resetProgress() {
  try { localStorage.removeItem(KEY) } catch {}
}
