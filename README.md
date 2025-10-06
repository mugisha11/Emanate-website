# Emanate-website

A Next.js 15 TypeScript website for Emanate.

## Run locally

Requirements:
- Node.js 18+ (or matching your environment)
- pnpm (recommended)

Install dependencies and run dev server:

```powershell
pnpm install
$env:PORT=3001; pnpm dev
Start-Process "http://localhost:3001"
```

Build for production:

```powershell
pnpm build
pnpm start
```

## Contributing
- Fork the repo and open a pull request for changes.
- Please run type checks and lint before submitting.

## Notes
- This project uses Tailwind CSS and Next.js.
- Social feed integration points are located under `app/api/instagram` and `app/api/linkedin`.
