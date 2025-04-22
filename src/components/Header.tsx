"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-primary-500 font-bold text-2xl">EventNet</span>
          <span className="text-accent-500 font-bold">Kosovo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Services
          </Link>
          <Link href="#how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            How It Works
          </Link>
          <Link href="#pricing" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Pricing
          </Link>
          <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            About
          </Link>
          <Link href="#contact" className="btn btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <Link 
                href="#services" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="btn btn-primary inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 