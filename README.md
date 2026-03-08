# SpaceX Explorer

React aplikacija za pregled SpaceX lansiranja i brodova koristeći [SpaceX API v4](https://github.com/r-spacex/SpaceX-API).

## Pokretanje projekta

```bash
# Instalacija paketa
npm install

# Pokretanje razvojnog servera
npm run dev

# Build za produkciju
npm run build
```

## Implementirane značajke

### Stranice

- **Početna stranica** — prikaz podataka o tvrtki SpaceX + odbrojavanje do sljedećeg lansiranja
- **Launches stranica** — popis lansiranja sa server-side paginacijom, pretragom i filterima (uspješna, neuspješna, nadolazeća)
- **Launch Detail stranica** — detalji o pojedinom lansiranju (raketa, status, YouTube link, razlozi neuspjeha)
- **Ships stranica** — popis brodova s pretragom i infinite scroll-om (Intersection Observer API)
- **Ship Detail stranica** — detalji o pojedinom brodu (uloge, luka, godina izgradnje)
- **404 stranica** — za nepostojeće rute

### Tehničke značajke

- **React Router v7** — navigacija s BrowserRouter, Routes, NavLink, useParams, useSearchParams
- **TypeScript** — tipovi za sve komponente, hookove i API odgovore
- **CSS Modules** — stilizacija svake komponente zasebno, korištenje CSS varijabli za temu
- **Dark / Light tema** — prebacivanje putem Context API-ja, spremanje u localStorage
- **Custom hookovi** — useLaunches, useLaunch, useShips, useShip, useCompany, useNextLaunch, useLaunchFilters
- **HOC (Higher-Order Component)** — withLoading za prikaz spinnera tijekom učitavanja podataka
- **Context API** — ThemeContext za upravljanje temom kroz cijelu aplikaciju
- **Intersection Observer** — infinite scroll za brodove
- **Responsive dizajn** — prilagodba za mobilne uređaje

## Tehnologije

- React 19
- TypeScript
- Vite
- React Router v7
- CSS Modules
