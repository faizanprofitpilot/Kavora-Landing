import type { Metadata } from 'next';
import { Orbitron, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kavora - Runtime Governance for Enterprise AI',
  description: 'Responsible AI fails when policy stops at paper. Kavora makes AI governance enforceable at runtime.',
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
  openGraph: {
    title: 'Kavora - Runtime Governance for Enterprise AI',
    description: 'Responsible AI fails when policy stops at paper. Kavora makes AI governance enforceable at runtime.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${ibmPlexSans.variable}`}>
      <body className={ibmPlexSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

