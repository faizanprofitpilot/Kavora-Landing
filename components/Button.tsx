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
  icon?: 'calendar' | 'mail';
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  disabled,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary shadow-sm hover:shadow-md relative overflow-hidden group',
    secondary:
      'bg-transparent text-text border-2 border-border hover:bg-surface-2 hover:border-primary focus:ring-primary',
    white:
      'bg-surface text-text border border-border hover:bg-surface-2 hover:border-border shadow-sm hover:shadow-md focus:ring-primary',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  const ButtonContent = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      <span className={`relative z-10 flex items-center ${variant === 'primary' ? '' : ''}`}>
        {children}
      </span>
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isExternal) {
      const linkProps = href.startsWith('mailto:') 
        ? { href }
        : { href, target: '_blank', rel: 'noopener noreferrer' };
      
      return (
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <a {...linkProps} className={combinedClassName}>
            {ButtonContent}
          </a>
        </motion.div>
      );
    }
    
    return (
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
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
      whileHover={!disabled ? { scale: 1.01 } : undefined}
      whileTap={!disabled ? { scale: 0.99 } : undefined}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {ButtonContent}
    </motion.button>
  );
}