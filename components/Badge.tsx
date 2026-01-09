import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export default function Badge({
  children,
  className = '',
  variant = 'default',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const variantStyles = {
    default: 'bg-[var(--primary)]/10 text-[var(--primary)]',
    outline: 'border border-[var(--border)] text-[var(--muted-foreground)]',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <span className={combinedClassName}>{children}</span>;
}

