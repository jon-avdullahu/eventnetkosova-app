"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiWifi, FiArrowRight } from 'react-icons/fi';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeIn} className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-medium">
              <FiWifi className="mr-2" />
              Event Connectivity Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Your Event. <br />
              <span className="text-primary-500">Instantly</span> Connected.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              Pre-configured mesh routers that auto-connect with a web dashboard for monitoring. Perfect for events, construction sites, and temporary venues.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link href="#contact" className="btn btn-primary px-8 py-3 text-lg w-full sm:w-auto">
                Get Started
              </Link>
              <Link href="#how-it-works" className="btn btn-outline px-8 py-3 text-lg w-full sm:w-auto flex items-center justify-center">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            variants={fadeIn}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Main image - can be replaced with actual image */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-primary-500 text-white flex items-center justify-between">
                  <div className="font-medium">EventNet Dashboard</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">Network Status</div>
                      <div className="font-medium text-gray-900 dark:text-white">Online - 3 Devices</div>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full">
                      Active
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">70% Bandwidth</span>
                      <span className="text-primary-500">4.2 GB / 6 GB</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Download</div>
                      <div className="font-bold text-gray-900 dark:text-white">87 Mbps</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Upload</div>
                      <div className="font-bold text-gray-900 dark:text-white">35 Mbps</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                      EventNet Kosovo - Your Event. Instantly Connected.
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-200 dark:bg-accent-800/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary-200 dark:bg-secondary-800/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Stats or Trusted By Section */}
        <motion.div 
          variants={fadeIn}
          initial="hidden" 
          animate="visible"
          className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-center text-gray-500 dark:text-gray-400 mb-8">Trusted by event organizers across Kosovo</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-gray-500 dark:text-gray-400 text-sm">Events Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.9%</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50,000+</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Devices Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 