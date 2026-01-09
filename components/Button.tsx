'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
> {
  variant?: 'primary' | 'secondary' | 'white';
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ring)]';
  
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[var(--primary)] to-blue-700 text-white hover:shadow-lg hover:shadow-[var(--primary)]/25 hover:-translate-y-0.5 focus:ring-[var(--ring)] relative overflow-hidden group',
    secondary:
      'bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:bg-[var(--muted)] hover:border-[var(--foreground)]/20 focus:ring-[var(--ring)]',
    white:
      'bg-white text-[var(--foreground)] hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 focus:ring-[var(--ring)]',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  const ButtonContent = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      <span className={variant === 'primary' ? 'relative z-10' : ''}>{children}</span>
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isExternal) {
      const linkProps = href.startsWith('mailto:') 
        ? { href }
        : { href, target: '_blank', rel: 'noopener noreferrer' };
      
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a {...linkProps} className={combinedClassName}>
            {ButtonContent}
          </a>
        </motion.div>
      );
    }
    
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={combinedClassName}>
          {ButtonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      {...(props as any)}
    >
      {ButtonContent}
    </motion.button>
  );
}

