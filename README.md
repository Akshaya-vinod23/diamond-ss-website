# Diamond SS Contracting Services — Website

Marketing website for Diamond SS Contracting Services, a company that
supplies skilled technicians and equipment to construction and
contracting projects on a contract/assignment basis.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Adding the site video

Drop your video file at:

```
public/media/site-reel.mp4
```

and, optionally, a still frame at:

```
public/media/site-reel-poster.jpg
```

The "Site Reel" section on the homepage picks both up automatically —
no code changes needed. Until a video file is added, that section shows
a placeholder.

## Editing content

All page content lives in `src/components/`, one file per section:

| File | Section |
|---|---|
| `Header.tsx` | Top navigation |
| `Hero.tsx` | Opening headline |
| `About.tsx` | Company overview |
| `Services.tsx` | Service list |
| `Process.tsx` | "How it works" steps |
| `VideoSection.tsx` | Site reel video |
| `Industries.tsx` | Project types supported |
| `Contact.tsx` | Contact form |
| `Footer.tsx` | Footer |

Colors, fonts, and spacing tokens are defined once in `src/index.css`
under the `@theme` block — change a value there and it updates
everywhere it's used.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Contact form

The form in `src/components/Contact.tsx` sends enquiries directly from the
browser to [Web3Forms](https://web3forms.com/). Create a `.env` file in the
project root and add your public Web3Forms access key:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Restart `npm run dev` after changing `.env`. The key is intentionally exposed
in the browser because Web3Forms uses public access keys. Do not put private
server credentials in a `VITE_` variable.

## Deploying

The `dist/` folder is a static site and can be deployed to any static
host — GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a plain web
server.
