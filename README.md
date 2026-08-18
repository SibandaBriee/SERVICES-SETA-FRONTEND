# Services SETA Frontend

This is the original Services SETA Next.js project with its code reorganised into a simpler, traceable structure. The existing styling, public assets, page content and navigation have been retained.

## Project structure

```text
app/
├── [...slug]/
│   └── page.tsx        # Handles the interior URLs from data/pages.ts
├── globals.css         # Existing site styling, unchanged
├── layout.tsx          # Next.js root HTML layout and metadata
└── page.tsx            # Landing page: imports and orders all home sections

components/
├── Header.tsx
├── Footer.tsx
├── Hero.tsx
├── Pathways.tsx
├── QuickTasks.tsx
├── Updates.tsx
├── Journey.tsx
└── ContentPage.tsx     # Shared layout for interior pages

data/
├── navigation.ts       # Main navigation links
├── homeData.ts         # Landing-page cards, tasks, notices and dates
└── pages.ts            # Content for interior routes
```

## What `[...slug]` does

`app/[...slug]/page.tsx` is a Next.js catch-all route. It receives URLs such as:

- `/funding`
- `/funding/mandatory-grants`
- `/stakeholders/learners`

It joins the URL sections into a key and finds the matching content in `data/pages.ts`. This keeps the existing interior navigation working without creating a separate page file for every content page.

## Run the project

Open the extracted folder in VS Code. The terminal must be in the same folder as `package.json`.

PowerShell check:

```powershell
Test-Path .\package.json
```

The result must be `True`.

Then run:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important

The ZIP contains `package.json` at its root. Do not open or run npm commands from a parent folder that does not contain `package.json`.
