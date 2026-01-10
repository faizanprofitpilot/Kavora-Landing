'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Card from './Card';
import Container from './Container';
import { Shield, Lock, FileText, Calendar, Mail } from 'lucide-react';

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) {
      setDisplayedText(text);
      return;
    }

    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;
    
    const timeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay]);

  return <span>{displayedText}</span>;
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 768;
    setIsReducedMotion(prefersReducedMotion);
    setIsMobile(mobile);

    if (!prefersReducedMotion && !mobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const valueProps = [
    {
      icon: Shield,
      title: 'Runtime enforcement',
      description: 'Govern AI at execution time',
    },
    {
      icon: Lock,
      title: 'Vendor governance',
      description: 'Control third-party AI systems',
    },
    {
      icon: FileText,
      title: 'Immutable audit trail',
      description: 'Complete compliance records',
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Hero%20background.png')",
        }}
      />
      
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 hero-gradient hero-grid opacity-20" />
      
      {/* Cursor glow effect */}
      {!isReducedMotion && !isMobile && (
        <div
          className="cursor-glow"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            opacity: mousePosition.x > 0 ? 1 : 0,
          }}
        />
      )}

      <Container className="relative z-10 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 drop-shadow-lg break-words"
          >
            <span className="shiny-blue font-orbitron inline-block" data-text="Runtime Governance for Enterprise AI">
              Runtime Governance for Enterprise AI
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg font-semibold text-white mb-8 mx-auto leading-tight drop-shadow-md max-w-6xl px-4 sm:px-6 md:px-8"
          >
            <div className="md:whitespace-nowrap">
              <TypingText 
                text="Responsible AI fails when policy stops at paper. Kavora makes AI governance enforceable at runtime."
                delay={0.3}
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-base lg:text-lg text-white/90 mb-12 max-w-6xl mx-auto leading-tight font-light drop-shadow-sm"
          >
            AI agents and vendor-hosted AI systems can act autonomously, call tools, and move data across enterprise boundaries. Most organizations have principles and oversight processes, but no technical control point once AI is deployed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button href="https://outlook.office.com/book/KavoraRuntimeAIGovernanceIntro@shwatech.com/" variant="primary">
              <Calendar className="w-4 h-4 mr-2" />
              Have a Conversation
            </Button>
            <Button href="mailto:faizan@shwatech.com?subject=Inquiry about Kavora" variant="white">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Value props strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card variant="value" delay={0} className="bg-gray-800 border-gray-700">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white mb-1">
                        {prop.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {prop.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

