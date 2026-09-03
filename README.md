# doffee. — donut and coffee bliss

A fully responsive marketing + ordering website for **doffee**, a donut-and-coffee shop concept (do + ffee = donut × coffee). Built with React, React Router, and Tailwind CSS.

The site is frontend-only by design: signup, login, and every "Place Order" / "Checkout" action intentionally end in a **"Website down for maintenance"** popup instead of hitting a real backend. It's meant to look and feel like a genuine, working ordering flow right up until the very last step.

## Credits

- **Brand & concept design:** [Fakiha Khan](https://www.linkedin.com/in/fakiha-khan-b3a16b243/) — the doffee name, identity, color palette, and menu concept
- **Website development:** [Rehan Zahid](https://www.linkedin.com/in/dev-rehan-zahid/) — turning the concept into this site

## Tech stack

- **React 19** + **Vite** — frontend framework and build tool
- **React Router** — client-side routing (`/`, `/menu`, `/about`, `/login`, `/signup`, `/order`, `/contact`)
- **Tailwind CSS** — styling, with the brand's colors and fonts configured as theme tokens
- Custom hand-drawn SVG icon set (no emojis, no third-party icon packs)
- No backend, no database, no real auth — all state is local React state / context

## Brand identity

| Token | Name | Hex |
|---|---|---|
| Coffee Brown | `--color-brown` | `#89491F` |
| Warm Cream | `--color-cream` | `#FEF5E7` |
| Sunlit Orange | `--color-orange` | `#FAA73D` |

Fonts: **Fraunces** (headlines) + **DM Sans** (body, nav, buttons, menu items).

Rule of thumb from the brand guide: *brown leads, cream carries, orange finishes* — brown for structure and headings, cream as the dominant background, orange used sparingly as an accent.

## Pages

- **Home** — hero, brand story, signature picks carousel, value props, gallery, CTA band
- **Menu** — Signature Coffee, Signature Donuts, Croissants, and Sandwiches, pulled from `src/data/menu.js`
- **About** — the doffee concept, how the food is made, credits, hours, and location
- **Login / Signup** — real client-side validation; valid submissions trigger the maintenance modal
- **Order** — a working mock cart (add items, adjust quantities, pick a pickup time); checkout triggers the maintenance modal
- **Contact** — a contact form; a valid, submitted message also triggers the maintenance modal

## Project structure

```
src/
  assets/         brand imagery (logo, product photos, lifestyle shots)
  components/     Navbar, Footer, MaintenanceModal, MenuCard, ProductCarousel, FormField, icons/
  context/        OrderContext — cart state + maintenance modal trigger, shared globally
  data/           menu.js — structured menu data (source of truth for the Menu and Order pages)
  pages/          Home, Menu, About, Login, Signup, Order, Contact
```

## Running locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173/` URL in your browser. Changes hot-reload automatically.

To preview on another device on the same WiFi network:

```bash
npm run dev -- --host
```

then open the "Network" URL it prints.

## Building for production

```bash
npm run build      # outputs to /dist
npm run preview    # serves that build locally to sanity-check it
```

## Deploying to GitHub Pages

```bash
npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch. In the repo's **Settings → Pages**, set the source to the `gh-pages` branch, root folder. The `base` path in `vite.config.js` must match the repository name for asset paths to resolve correctly.