# PowerPartners website

Nieuwe website voor [power-partners.nl](https://www.power-partners.nl), gebouwd met Next.js 16 (App Router), Tailwind CSS 4, Poppins en Font Awesome.

## Starten

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structuur

- `src/lib/site.ts`: alle teksten en gegevens (contact, diensten, stappen, klantverhalen, FAQ)
- `src/app/*/page.tsx`: de pagina's (home, onze-diensten, over-ons, werkwijze, veelgestelde-vragen, klantverhalen, contact)
- `src/components/`: header, footer, gedeelde secties en het contactformulier
- `src/app/globals.css`: merkkleuren (`ink`, `petrol`, `sky`, `teal`) en de vaste hoekradius (`rounded-brand`, 15px)
- `public/images/`: logo's en foto's van de huidige site

## Contactformulier

Het formulier gebruikt een server action (`src/app/actions.ts`). Zonder configuratie worden berichten alleen in de serverlog gezet. Stel voor echte e-mail deze variabelen in:

```
RESEND_API_KEY=...                         # API-key van resend.com
CONTACT_TO_EMAIL=Toni@power-partners.nl    # optioneel, standaard dit adres
CONTACT_FROM_EMAIL=website@power-partners.nl  # een geverifieerd afzenderdomein bij Resend
```

De oude URL `/adviesgesprek` wordt doorgestuurd naar `/contact`.
