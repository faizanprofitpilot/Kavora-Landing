import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Have a Conversation - Kavora',
  description: 'Tell us about your environment and what you are trying to govern. We will respond within 1 business day.',
  openGraph: {
    title: 'Have a Conversation - Kavora',
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

