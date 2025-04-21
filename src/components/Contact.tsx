"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiCheckCircle,
  FiCalendar,
  FiUsers,
  FiWifi
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

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the data to a server here
    console.log(formData);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Get Your Event Connected
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            Contact us for a custom quote tailored to your event's specific needs. We'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Your message has been received. We'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="+383 44 123 456"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Festival">Festival/Concert</option>
                      <option value="Exhibition">Exhibition/Expo</option>
                      <option value="Workshop">Workshop/Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Event Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Estimated Guests
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUsers className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="100"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell us about any specific needs for your event..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary py-3"
                >
                  Get Your Quote
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="lg:pl-8"
          >
            <div className="bg-primary-500 text-white rounded-2xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-4 h-6 w-6 text-white/80" />
                  <div>
                    <h4 className="font-medium">Office Location</h4>
                    <p className="text-white/80">Prishtina Innovation Center, Rr. Rexhep Luci, Pristina, Kosovo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMail className="mt-1 mr-4 h-6 w-6 text-white/80" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@eventnet-ks.com" className="text-white/80 hover:text-white">
                      contact@eventnet-ks.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="mt-1 mr-4 h-6 w-6 text-white/80" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+38344123456" className="text-white/80 hover:text-white">
                      +383 44 123 456
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white flex items-center">
                    <FiWifi className="mr-2 text-primary-500" />
                    How early do you need to book?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We recommend booking at least 2 weeks in advance for small events and 4-6 weeks for large events to ensure equipment availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white flex items-center">
                    <FiWifi className="mr-2 text-primary-500" />
                    Do you cover all of Kosovo?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, we provide services throughout Kosovo, with slightly higher travel fees for locations outside of Pristina.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-white flex items-center">
                    <FiWifi className="mr-2 text-primary-500" />
                    What if there's a technical issue during the event?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our on-site technician can quickly resolve most issues, and our equipment includes backup systems to ensure continuous service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 