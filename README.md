# Kavora Landing Page

A production-ready marketing landing page for Kavora built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Home Page** (`/`) - Complete marketing landing page with all sections
- **Contact Page** (`/contact`) - Form with client-side validation
- **API Route** (`/api/contact`) - Handles form submissions
- **Responsive Design** - Mobile-perfect layout
- **SEO Optimized** - Metadata and Open Graph tags
- **Accessible** - Semantic HTML and ARIA attributes

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint for contact form
│   ├── contact/
│   │   ├── layout.tsx            # Contact page metadata
│   │   └── page.tsx              # Contact form page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Button.tsx                # Reusable button component
│   ├── Footer.tsx                 # Site footer
│   └── Header.tsx                 # Site header with navigation
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

