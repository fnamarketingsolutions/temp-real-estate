# Estate Loop

Estate Loop is a marketing site for a commercial real estate marketplace. It introduces the platform to institutional investors and sponsors, explains how deals are sourced and underwritten, and collects inbound interest.

The site covers discovery, diligence, execution, and ongoing management of direct commercial real estate deals for investors such as pensions, endowments, family offices, and RIAs. A separate sponsors section explains capital and liquidity options across the life of an asset.

## Stack

- [Next.js](https://nextjs.org/) 12 (pages router)
- React 17 and TypeScript
- Material UI and Emotion
- Sass modules for layout and page styles

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Home: marketplace overview, product pillars, team, and contact form |
| `/sponsor` | Sponsor capital solutions, comparison with the status quo, and how underwriting works |
| `/career` | Careers, company values, and benefits |
| `/privacy-and-cookies` | Privacy policy |
| `/terms-of-service` | Terms of use |
| `/confidentiality-agreement` | Confidentiality agreement |

## Getting started

Requires Node.js 16 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional analytics environment variables, read in `pages/_document.tsx`:

- `GA_TRACKING_ID` — Google Analytics measurement ID
- `MS_CLARITY_ID` — Microsoft Clarity project ID

The contact form posts to a Salesforce Web-to-Lead endpoint configured in `components/CTA`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format source files with Prettier |
| `npm run generate` | Build and export a static site |

## Project layout

```
pages/          Routes and the Next.js app shell
components/     Navbar, footer, home, sponsor, and careers sections
styles/         Global styles, fonts, and the Emotion cache
types/          Shared TypeScript types
utils/          Scroll helpers and legal page markup
public/         Images, icons, and the web manifest
```

## Contact

- Email: [hello@estateloop.com](mailto:hello@estateloop.com)
- Careers: [careers@estateloop.com](mailto:careers@estateloop.com)
- Phone: +1 (646) 555-0192
- Office: 120 Broadway, Floor 18, New York, NY 10271
