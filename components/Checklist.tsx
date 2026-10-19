'use client'
import { useState } from 'react'
import Link from 'next/link'

type Step = { title: string; look: string[]; topic?: string }

const QUALITY: Step[] = [
  { title: 'Patient, date and side marker present', look: ['Name/date of birth and time of exam', 'Correct side marker; PA or AP stated'] },
  { title: 'Projection', look: ['Erect PA, AP (supine/sitting) or lateral?', 'AP magnifies the heart — do not measure CTR on AP'], topic: 'projections-quality' },
  { title: 'Rotation', look: ['Medial clavicle ends equidistant from the spinous processes', 'Trachea centred'], topic: 'projections-quality' },
  { title: 'Inspiration', look: ['≥10 posterior ribs or 5–7 anterior ribs above the diaphragm'], topic: 'projections-quality' },
  { title: 'Exposure (penetration)', look: ['Vertebrae faintly visible behind the heart', 'Lung vessels clearly seen; apices, angles and diaphragm included'], topic: 'projections-quality' },
]
const SEARCH: Step[] = [
  { title: 'Soft tissues and chest wall', look: ['Symmetry, breast shadows, nipple shadows', 'Subcutaneous emphysema, masses, mastectomy'], topic: 'chestwall-devices-bone' },
  { title: 'Bones', look: ['Ribs (fractures, callus), clavicles, scapulae, spine', 'Lytic or sclerotic lesions; Pancoast erosion'], topic: 'chestwall-devices-bone' },
  { title: 'Pleura and costophrenic angles', look: ['Sharp acute angles; meniscus; apical cap', 'Lung edge line (pneumothorax); plaques; fissures'], topic: 'pleural-effusion' },
  { title: 'Diaphragm and below', look: ['Right ≥ left height; contour; free air under diaphragm', 'Elevation (phrenic palsy, collapse)'], topic: 'silhouette-sign' },
  { title: 'Lungs: compare zone to zone', look: ['Alveolar, interstitial, nodular or atelectatic pattern?', 'Vessel size gradient; hyperlucency'], topic: 'alveolar-patterns' },
  { title: 'Hila', look: ['Position (left higher), size and density, symmetry'], topic: 'hilar-enlargement' },
  { title: 'Mediastinum and lines', look: ['Width, contours, paratracheal stripe, APW, azygo-oesophageal recess', 'Trachea position; hilum overlay sign'], topic: 'normal-mediastinum' },
  { title: 'Heart', look: ['CTR on PA only', 'Retrocardiac space, left lower lobe, hiatus hernia'], topic: 'normal-mediastinum' },
  { title: 'Devices and review areas', look: ['Lines, tubes, pacemaker, sternal wires, foreign bodies', 'Check the lung apices, behind the heart and under the diaphragm again'], topic: 'chestwall-devices-bone' },
]

function Group({ title, steps, name, numbered }: { title: string; steps: Step[]; name: string; numbered: boolean }) {
  const [done, setDone] = useState<Record<number, boolean>>({})
  const n = Object.values(done).filter(Boolean).length
  return (
    <section aria-labelledby={name} className="rounded border border-line bg-paper p-4 sm:p-5">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 id={name} className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-mute">{n}/{steps.length} done · <button className="underline" onClick={() => setDone({})}>clear</button></span>
      </div>
      <ol className={numbered ? 'space-y-3' : 'space-y-3'}>
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-3">
            <input id={`${name}-${i}`} type="checkbox" checked={!!done[i]} onChange={(e) => setDone({ ...done, [i]: e.target.checked })} className="mt-1.5 h-5 w-5 shrink-0 accent-[#0E6577]" />
            <label htmlFor={`${name}-${i}`} className="min-w-0">
              <span className={`font-medium ${done[i] ? 'text-mute line-through' : ''}`}>{numbered ? `${i + 1}. ` : ''}{s.title}</span>
              <ul className="mt-1 list-disc pl-5 text-[0.93rem] text-mute">{s.look.map((l) => <li key={l}>{l}</li>)}</ul>
              {s.topic && <Link className="text-sm text-teal underline" href={`/topics/${s.topic}`}>Learn more</Link>}
            </label>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function Checklist() {
  return (
    <div className="space-y-6">
      <Group title="Step 1: check the film" steps={QUALITY} name="quality" numbered={false} />
      <Group title="Step 2: search from the periphery to the centre" steps={SEARCH} name="search" numbered />
    </div>
  )
}
