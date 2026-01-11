'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'value';
  delay?: number;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  delay = 0,
}: CardProps) {
  const baseStyles = 'rounded-2xl border border-border/60 bg-surface shadow-sm transition-all duration-300';
  
  const variantStyles = {
    default: 'p-8 md:p-12 hover:shadow-md hover:-translate-y-1',
    feature: 'p-6 md:p-8 hover:shadow-md hover:-translate-y-1',
    value: 'p-6 hover:shadow-md hover:-translate-y-0.5',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className={combinedClassName}
    >
      {children}
    </motion.div>
  );
}

