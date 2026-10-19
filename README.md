# CXR Atlas — chest X-ray learning app

Next.js 14 + TypeScript + Tailwind. Topic-by-topic knowledge base, reading checklist, image bank (168 figures) and a 77-question quiz, built from the ESR *Modern Radiology* eBook chapter **Chest Imaging**.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy
1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repository. Framework: Next.js (auto-detected). No environment variables needed.
3. `vercel.json` pins the region to Mumbai (`bom1`).

## Where the knowledge lives
| Path | What it holds |
|---|---|
| `content/topics-a.ts`, `content/topics-b.ts` | 24 topics: summaries, sections, key points, pitfalls, mnemonics |
| `content/images.ts` | Image bank manifest (caption, topic, modality, ESR page) — regenerate with `scripts/build_image_manifest.py` |
| `content/quiz.ts` | Quiz questions with explanations and ESR page references |
| `public/images`, `public/quiz` | Optimised JPEG figures |
| `/api/knowledge` | The whole knowledge base as JSON |

To add a topic, append an object to `topics-a.ts`/`topics-b.ts`; add questions to `quiz.ts` using the topic `slug`. Everything else (menus, counts, search) updates automatically.

## Licence and attribution
Source: European Society of Radiology; Becker M, Cohen J, Deux J-F, Snoeckx A (2025). *ESR Modern Radiology eBook: Chest Imaging.* DOI 10.26044/esr-modern-radiology-12, licensed **CC BY-NC-ND 4.0**. Figures are reproduced unchanged from the eBook (resized/re-encoded only); the knowledge-base text is a condensed restatement. Keep this app **non-commercial** and keep the attribution footer. See `NOTICE.md`.
