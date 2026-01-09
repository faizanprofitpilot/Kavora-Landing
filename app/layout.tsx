import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kavora - Runtime Governance for Enterprise AI',
  description: 'Responsible AI fails when policy stops at paper. Kavora makes AI governance enforceable at runtime.',
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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

