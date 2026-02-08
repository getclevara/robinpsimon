# Robin Simon — Neighborhood Intelligence Platform

**Your Move. Your Advantage.**

A Next.js website and lead-generation tool for Robin Simon, Berkshire Hathaway HomeServices / Laffey International Realty.

## Features

- **Move Score Quiz** — 60-second neighborhood matching quiz covering Queens, Nassau County & Western Suffolk. Shareable at `/score`.
- **Profit Calculator** — Seller net proceeds calculator with full NY closing cost breakdown (transfer tax, mansion tax, attorney fees) plus "where your equity could take you" feature.
- **Featured Listings** — Property showcase with Robin's active listings.
- **Lead Capture** — Contact form with buyer/seller segmentation.
- **Berkshire Hathaway Branding** — Burgundy/gold color system with Playfair Display + DM Sans typography.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Click Deploy — no configuration needed
4. Point your domain (e.g. `robinpsimon.com`) to Vercel in DNS settings

## Project Structure

```
├── app/
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Homepage
│   └── score/
│       └── page.tsx         # Standalone shareable quiz page
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll effect
│   ├── Hero.tsx             # Full-screen hero with CTAs
│   ├── MoveScoreQuiz.tsx    # Neighborhood matching tool
│   ├── ProfitCalculator.tsx # Seller equity calculator
│   ├── FeaturedListings.tsx # Property cards
│   ├── About.tsx            # Robin's bio section
│   ├── Contact.tsx          # Lead capture form
│   ├── Footer.tsx           # Site footer
│   └── ScorePage.tsx        # Standalone score page wrapper
├── data/
│   └── neighborhoods.ts     # All neighborhood data + calculators
├── public/                  # Images (property photos, headshot, skyline)
```

## Customization

- **Phone number**: Search for `+15165551234` and replace with Robin's real number
- **Email**: Search for `robin@robinsimon.com` and replace
- **LinkedIn**: Update the LinkedIn URL in About.tsx and Footer.tsx
- **Listings**: Edit `components/FeaturedListings.tsx` with real MLS data
- **Neighborhoods**: Add/edit neighborhoods in `data/neighborhoods.ts`

## Markets Covered

**Nassau County**: Jericho, Syosset, Massapequa, Hicksville, Floral Park, New Hyde Park, Elmont, Franklin Square, Garden City

**Queens**: Bellerose, Glen Oaks, Forest Hills, Little Neck, Bayside, Queens Village

**Western Suffolk**: Melville, Deer Park, Farmingville
