# MICRO-TOOLS-AND-SERVICES

> Static marketing site for Micro Tools & Services (TanStack Start + React + Tailwind).

## Development

You need Node.js and Bun — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and [Bun](https://bun.sh).

```sh
git clone <this-repository-url>
cd <repository-name>
bun install
bun run dev
```

## Build & deploy (Vercel)

Framework preset: TanStack Start. Build runs `vite build` with the Nitro
Vercel preset auto-detected during Vercel builds (`NITRO_PRESET` not required).

```sh
bun run build
bun run test
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
