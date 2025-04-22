"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

interface HeaderProps {
  activeSection?: string;
}

const Header = ({ activeSection = "" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <div className="container-custom flex items-center justify-between py-3">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-primary-500 font-bold text-2xl">EventNet</span>
          <span className="text-accent-500 font-bold">Kosovo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={navLinkVariants}
          >
            <Link 
              href="#services" 
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 px-4 ${activeSection === "services" ? "text-primary-500 dark:text-primary-400" : ""}`}
              onClick={handleNavClick}
            >
              Services
            </Link>
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={navLinkVariants}
          >
            <Link 
              href="#how-it-works" 
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 px-4 ${activeSection === "how-it-works" ? "text-primary-500 dark:text-primary-400" : ""}`}
              onClick={handleNavClick}
            >
              How It Works
            </Link>
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={navLinkVariants}
          >
            <Link 
              href="#pricing" 
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 px-4 ${activeSection === "pricing" ? "text-primary-500 dark:text-primary-400" : ""}`}
              onClick={handleNavClick}
            >
              Pricing
            </Link>
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={navLinkVariants}
          >
            <Link 
              href="#about" 
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 px-4 ${activeSection === "about" ? "text-primary-500 dark:text-primary-400" : ""}`}
              onClick={handleNavClick}
            >
              About
            </Link>
          </motion.div>
          
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={navLinkVariants}
          >
            <Link 
              href="#contact" 
              className="btn btn-primary ml-2"
              onClick={handleNavClick}
            >
              Get Started
            </Link>
          </motion.div>
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
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link 
                  href="#services" 
                  className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2 block ${activeSection === "services" ? "text-primary-500 dark:text-primary-400" : ""}`}
                  onClick={handleNavClick}
                >
                  Services
                </Link>
              </motion.div>
              
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link 
                  href="#how-it-works" 
                  className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2 block ${activeSection === "how-it-works" ? "text-primary-500 dark:text-primary-400" : ""}`}
                  onClick={handleNavClick}
                >
                  How It Works
                </Link>
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link 
                  href="#pricing" 
                  className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2 block ${activeSection === "pricing" ? "text-primary-500 dark:text-primary-400" : ""}`}
                  onClick={handleNavClick}
                >
                  Pricing
                </Link>
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link 
                  href="#about" 
                  className={`text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 py-2 block ${activeSection === "about" ? "text-primary-500 dark:text-primary-400" : ""}`}
                  onClick={handleNavClick}
                >
                  About
                </Link>
              </motion.div>
              
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link 
                  href="#contact" 
                  className="btn btn-primary inline-block text-center"
                  onClick={handleNavClick}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 