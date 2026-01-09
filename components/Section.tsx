import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'muted' | 'image';
  withDivider?: boolean;
}

export default function Section({
  children,
  id,
  className = '',
  variant = 'default',
  withDivider = false,
}: SectionProps) {
  const bgClass = variant === 'muted' 
    ? 'bg-[var(--muted)]' 
    : variant === 'image'
    ? 'relative overflow-hidden'
    : 'bg-[var(--background)]';

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      {variant === 'image' && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: "url('/Alternate background.png')",
            }}
          />
          <div className="absolute inset-0 bg-white/20 z-0" />
        </>
      )}
      {withDivider && <div className="section-divider relative z-10" />}
      <div className={`py-20 md:py-32 relative z-10`}>
        {children}
      </div>
    </section>
  );
}

