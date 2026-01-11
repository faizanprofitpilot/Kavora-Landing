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
    default: 'bg-primary/10 text-primary',
    outline: 'border border-border text-text-muted',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <span className={combinedClassName}>{children}</span>;
}

