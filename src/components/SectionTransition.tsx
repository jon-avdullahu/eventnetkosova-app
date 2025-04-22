"use client";

import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionTransitionProps {
  children: ReactNode;
  id: string;
}

export default function SectionTransition({ children, id }: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if this section is active when URL hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === `#${id}` || (!hash && id === 'hero')) {
        setIsVisible(true);
      }
    };

    // Check on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Clean up
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [id]);

  return (
    <section id={id}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          exit={{ opacity: 0, y: -30 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  );
} 