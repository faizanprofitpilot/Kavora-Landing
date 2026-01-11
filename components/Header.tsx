'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky z-50 transition-all duration-500 ${
        scrolled ? 'top-4' : 'top-0'
      }`}
    >
      <nav className={`max-w-6xl mx-auto transition-all duration-500 ${
        scrolled 
          ? 'header-blur py-2 px-6 lg:px-8' 
          : 'header-clean px-4 sm:px-6 lg:px-8 py-0'
      }`}>
        <div className={`flex items-center transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src={scrolled ? "/Post scroll logo.png" : "/logo.png"}
              alt="Kavora"
              width={200}
              height={70}
              className="h-16 w-auto object-contain transition-all duration-500"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link
              href="/#product"
              onClick={(e) => handleNavClick(e, 'product')}
              className={`transition-colors text-base font-medium ${
                scrolled
                  ? 'text-neutral-100 hover:text-neutral-200'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Product
            </Link>
            <Link
              href="/#why-now"
              onClick={(e) => handleNavClick(e, 'why-now')}
              className={`transition-colors text-base font-medium ${
                scrolled
                  ? 'text-neutral-100 hover:text-neutral-200'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Why Now
            </Link>
            <Link
              href="/#who-its-for"
              onClick={(e) => handleNavClick(e, 'who-its-for')}
              className={`transition-colors text-base font-medium ${
                scrolled
                  ? 'text-neutral-100 hover:text-neutral-200'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Who It's For
            </Link>
            <Link
              href="/#team"
              onClick={(e) => handleNavClick(e, 'team')}
              className={`transition-colors text-base font-medium ${
                scrolled
                  ? 'text-neutral-100 hover:text-neutral-200'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Team
            </Link>
            <Link
              href="/#status"
              onClick={(e) => handleNavClick(e, 'status')}
              className={`transition-colors text-base font-medium ${
                scrolled
                  ? 'text-neutral-100 hover:text-neutral-200'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Status
            </Link>
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <a 
              href="https://outlook.office.com/book/KavoraRuntimeAIGovernanceIntro@shwatech.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                scrolled
                  ? 'bg-white text-primary hover:bg-neutral-100 focus:ring-primary shadow-sm hover:shadow-md'
                  : 'bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary shadow-sm hover:shadow-md relative overflow-hidden group'
              }`}
            >
              {!scrolled && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}
              <span className={`relative z-10 flex items-center`}>
                <Calendar className="w-4 h-4 mr-2" />
                Have a Conversation
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <a 
              href="https://outlook.office.com/book/KavoraRuntimeAIGovernanceIntro@shwatech.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                scrolled
                  ? 'bg-white text-primary hover:bg-neutral-100 focus:ring-primary shadow-sm hover:shadow-md'
                  : 'bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary shadow-sm hover:shadow-md relative overflow-hidden group'
              }`}
            >
              {!scrolled && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}
              <span className={`relative z-10 flex items-center`}>
                <Calendar className="w-4 h-4 mr-2" />
                Have a Conversation
              </span>
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

