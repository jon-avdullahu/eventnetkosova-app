"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiInfo } from 'react-icons/fi';

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

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);
  
  const pricingPlans = [
    {
      name: 'Small Events',
      description: 'Perfect for intimate gatherings and small workshops',
      price: annualBilling ? '€120' : '€150',
      features: [
        'Up to 50 guests',
        'Guest Wi-Fi',
        'Basic setup and teardown',
        'Email support',
        '4-hour coverage',
        'Simple captive portal'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Medium Events',
      description: 'Ideal for weddings, corporate events, and medium-sized gatherings',
      price: annualBilling ? '€240' : '€300',
      features: [
        'Up to 250 guests',
        'Guest Wi-Fi + Staff network',
        'Vendor network for payments',
        'Basic QoS for streaming',
        'Setup and teardown',
        'Email and phone support',
        '8-hour coverage',
        'Branded captive portal'
      ],
      highlighted: true,
      cta: 'Popular Choice'
    },
    {
      name: 'Large Events',
      description: 'For festivals, expos, and large-scale gatherings',
      price: annualBilling ? '€640' : '€800',
      features: [
        'Unlimited guests',
        'Guest, Staff, & Vendor networks',
        'Premium QoS for streaming',
        'LTE/5G backup connection',
        'On-site technician support',
        'Full day coverage (12 hours)',
        'Custom branded experience',
        'Post-event analytics report'
      ],
      highlighted: false,
      cta: 'Contact Us'
    }
  ];

  const addOns = [
    { name: 'On-site Technician', price: '€50' },
    { name: 'Custom Branded Portal', price: '€50' },
    { name: 'LTE/5G Backup', price: '€30' },
    { name: 'Streaming Optimization', price: '€75' },
    { name: 'Extended Hours (per hour)', price: '€30' },
    { name: 'Data Analytics Report', price: '€45' }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg mb-8"
          >
            Choose the perfect plan for your event. All plans include setup, teardown, and basic support.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!annualBilling ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Per Event
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={annualBilling}
                onChange={() => setAnnualBilling(!annualBilling)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
            </label>
            <span className={`ml-3 ${annualBilling ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly Retainer (20% off)
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
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
              className={`rounded-2xl overflow-hidden ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-primary-500 to-primary-600 text-white shadow-xl scale-105 z-10' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md'
              }`}
            >
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline mb-8">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {annualBilling ? '/month' : '/event'}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FiCheck className={`mt-1 mr-2 ${plan.highlighted ? 'text-white' : 'text-primary-500 dark:text-primary-400'}`} />
                      <span className={`${plan.highlighted ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    plan.highlighted 
                      ? 'bg-white text-primary-600 hover:bg-gray-100' 
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Add-ons Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
        >
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Optional Add-ons</h3>
            <span className="ml-2 text-gray-500 dark:text-gray-400 flex items-center text-sm">
              <FiInfo className="mr-1" /> Available with any package
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg"
              >
                <span className="text-gray-900 dark:text-white">{addon.name}</span>
                <span className="font-medium text-primary-500">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 