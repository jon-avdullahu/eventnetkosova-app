"use client";

import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            About EventNet Kosovo
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            We are a specialized mobile network service provider offering temporary internet and networking solutions for events of all sizes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              EventNet Kosovo was founded in 2025 by a team of networking professionals who saw a gap in Kosovo's event industry: reliable, professional temporary connectivity solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              After experiencing firsthand the challenges of poor connectivity at local events, our founders decided to combine their expertise in networking technology to create a service that would ensure seamless connectivity for events of all types and sizes.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, EventNet Kosovo is the leading provider of temporary network solutions in the region, serving weddings, corporate events, music festivals, and more with our plug-and-play mesh network rental service.
            </p>
          </motion.div>

          {/* Image or illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-secondary-500/80 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-5xl font-bold mb-2">500+</div>
                    <div className="text-xl"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-900 dark:text-white font-medium">Areas Served</div>
                  <div className="text-gray-900 dark:text-white font-medium">Prishtina, Prizren, Peja, All Kosovo</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-900 dark:text-white font-medium">Year Founded</div>
                  <div className="text-gray-900 dark:text-white font-medium">2025</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-900 dark:text-white font-medium">Team Size</div>
                  <div className="text-gray-900 dark:text-white font-medium">5 Networking Professionals</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.5
                }
              }
            }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6"
          >
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-primary-500 rounded-lg flex items-center justify-center mb-4">
              <FiTarget size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To provide seamless, reliable connectivity solutions that empower event organizers to create exceptional experiences without worrying about technical challenges.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5
                }
              }
            }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6"
          >
            <div className="w-12 h-12 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-500 rounded-lg flex items-center justify-center mb-4">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To become the leading event connectivity provider in the Balkans, known for innovation, reliability, and exceptional customer service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5
                }
              }
            }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6"
          >
            <div className="w-12 h-12 bg-accent-50 dark:bg-accent-900/20 text-accent-500 rounded-lg flex items-center justify-center mb-4">
              <FiUsers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Values</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Reliability in every deployment</li>
              <li>• Technical excellence and innovation</li>
              <li>• Customer-focused service</li>
              <li>• Proactive problem solving</li>
              <li>• Transparency in pricing and service</li>
            </ul>
          </motion.div>
        </div>

        {/* Team section or other content can be added here */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Connect Your Event?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Contact us today for a custom quote and let us handle all your event connectivity needs with our professional plug-and-play mesh network service.
          </p>
          <a href="#contact" className="btn btn-primary px-8 py-3 inline-block">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 