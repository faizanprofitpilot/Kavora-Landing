import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to Sales - Kavora',
  description: 'Tell us about your environment and what you are trying to govern. We will respond within 1 business day.',
  openGraph: {
    title: 'Talk to Sales - Kavora',
    description: 'Tell us about your environment and what you are trying to govern. We will respond within 1 business day.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

