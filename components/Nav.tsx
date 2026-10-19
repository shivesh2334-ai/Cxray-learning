import Link from 'next/link'

const links = [
  { href: '/topics', label: 'Topics' },
  { href: '/read', label: 'Reading checklist' },
  { href: '/images', label: 'Image bank' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/knowledge', label: 'Knowledge base' },
]

export default function Nav() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight text-teal-dark">
          CXR Atlas
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1 text-mute hover:text-teal">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
