import { ESR_CITATION } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-8 text-sm text-mute">
        <p>
          Educational use only. Not a substitute for clinical judgement or a radiologist’s report.
        </p>
        <p>
          Source: {ESR_CITATION}. Published by the ESR under{' '}
          <a className="underline" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            CC BY-NC-ND 4.0
          </a>
          . Figures are reproduced from the eBook for non-commercial study; this app is not endorsed by the ESR. Page
          references point to the original chapter.
        </p>
      </div>
    </footer>
  )
}
