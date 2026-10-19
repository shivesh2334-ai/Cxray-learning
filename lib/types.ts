export type Section = { heading: string; points: string[] }
export type Topic = {
  slug: string
  title: string
  module: string
  pages: string // page range in the ESR eBook chapter
  summary: string
  sections: Section[]
  pearls: string[] // "attention" take-aways
  pitfalls?: string[]
  mnemonic?: { name: string; text: string }
  keywords?: string[]
}
export type ImageItem = {
  id: string
  src: string
  page: number
  topic: string
  modality: string
  caption: string
  w: number
  h: number
}
export type Question = {
  id: string
  topic: string
  type: 'single' | 'multi'
  stem: string
  options: string[]
  answer: number[]
  explanation: string
  page?: string
  images?: string[] // shown with the question
  revealImages?: string[] // shown after answering
}
export const MODULES = [
  'Foundations',
  'Normal anatomy',
  'Signs, chest wall & devices',
  'Pleura',
  'Mediastinum & hila',
  'Lung parenchyma',
  'Cardiopulmonary',
] as const
