"use client";

import { motion } from 'framer-motion';
import { 
  FiWifi, 
  FiShoppingCart, 
  FiVideo, 
  FiUsers, 
  FiPhoneCall, 
  FiTool, 
  FiActivity, 
  FiPieChart 
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

const Services = () => {
  const services = [
    {
      icon: <FiWifi size={24} />,
      title: 'Guest Wi-Fi',
      description: 'Secure, fast Wi-Fi for event attendees with custom portal login and optional branding.',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      icon: <FiShoppingCart size={24} />,
      title: 'Vendor Network',
      description: 'Isolated network for payment systems including POS devices and card readers with enhanced security.',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    },
    {
      icon: <FiVideo size={24} />,
      title: 'QoS for Streaming',
      description: 'Prioritized bandwidth for live video or audio streams ensuring high-quality broadcasts.',
      color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Private Staff Network',
      description: 'Segmented and secured access for event staff or performers separate from guest networks.',
      color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: <FiPhoneCall size={24} />,
      title: 'LTE/5G Backup',
      description: 'Internet failover if the primary line fails, crucial for payment systems and streaming continuity.',
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      icon: <FiTool size={24} />,
      title: 'On-site Support',
      description: 'Technician present during the event or remote monitoring option for technical assistance.',
      color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: <FiActivity size={24} />,
      title: 'Setup + Teardown',
      description: 'Fast deployment typically under 3 hours and complete removal after your event concludes.',
      color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400'
    },
    {
      icon: <FiPieChart size={24} />,
      title: 'Data Reports',
      description: 'Optional usage statistics, device counts, and uptime reports for the event host.',
      color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
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
            Our Event Connectivity Services
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            We offer a complete range of networking solutions to ensure your event's connectivity needs are met with professional, reliable service.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 