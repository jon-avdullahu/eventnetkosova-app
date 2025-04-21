"use client";

import { motion } from 'framer-motion';
import { 
  FiPhoneCall, 
  FiPackage, 
  FiSettings, 
  FiWifi,
  FiUsers,
  FiTool 
} from 'react-icons/fi';

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

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiPhoneCall size={24} />,
      title: 'Request a Quote',
      description: 'Tell us about your event details, including date, location, expected attendees, and specific connectivity needs.',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      number: '01'
    },
    {
      icon: <FiPackage size={24} />,
      title: 'Tailored Solution',
      description: 'We design a custom network architecture that fits your venue and specific requirements.',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      number: '02'
    },
    {
      icon: <FiSettings size={24} />,
      title: 'Pre-Event Setup',
      description: 'Our team arrives 3-4 hours before your event to set up and test all network components.',
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      number: '03'
    },
    {
      icon: <FiWifi size={24} />,
      title: 'Network Activation',
      description: 'All mesh routers auto-connect to form a seamless wireless network covering your entire venue.',
      color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
      number: '04'
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Event Monitoring',
      description: 'Monitor network performance in real-time with our dashboard, ensuring optimal connectivity throughout.',
      color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
      number: '05'
    },
    {
      icon: <FiTool size={24} />,
      title: 'Quick Teardown',
      description: 'After your event, we quickly dismantle the network system with minimal disruption.',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
      number: '06'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            How EventNet Kosovo Works
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            Our plug-and-play mesh network rental service makes connecting your event simple, reliable, and hassle-free.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-bl-lg font-bold text-gray-500 dark:text-gray-400">
                {step.number}
              </div>
              <div className="p-6">
                <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mt-16 p-8 bg-primary-500 rounded-2xl text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose EventNet Kosovo?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <FiSettings size={28} />
              </div>
              <h4 className="text-xl font-medium mb-2">Pre-Configured</h4>
              <p className="text-primary-100">All equipment arrives ready to use with minimal setup time required.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <FiWifi size={28} />
              </div>
              <h4 className="text-xl font-medium mb-2">Reliable Connection</h4>
              <p className="text-primary-100">Our mesh network ensures coverage throughout your venue with no dead zones.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <FiUsers size={28} />
              </div>
              <h4 className="text-xl font-medium mb-2">Technical Support</h4>
              <p className="text-primary-100">Expert technicians available on-site or remotely during your entire event.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 