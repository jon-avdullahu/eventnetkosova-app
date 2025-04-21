"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arta Krasniqi',
      role: 'Wedding Planner',
      company: 'Dream Weddings Kosovo',
      testimonial: "EventNet Kosovo transformed how we handle connectivity at our wedding venues. The guest WiFi portal with the couple's names is always a nice touch, and their vendor network ensures payment systems work flawlessly.",
      rating: 5,
      image: null // In a production environment, this would be a path to an image
    },
    {
      name: 'Blerim Gashi',
      role: 'Event Director',
      company: 'Pristina Film Festival',
      testimonial: "We needed reliable streaming capabilities for our outdoor film screenings, and EventNet delivered perfectly. Their QoS optimization made sure our live streams never buffered despite hundreds of attendees.",
      rating: 5,
      image: null
    },
    {
      name: 'Teuta Berisha',
      role: 'Conference Organizer',
      company: 'Digital Kosovo Conference',
      testimonial: "Their setup was fast and the on-site technician was incredibly helpful. We had separate networks for staff, speakers, and attendees - all working flawlessly throughout our 3-day tech conference.",
      rating: 5,
      image: null
    },
    {
      name: 'Valon Rexhepi',
      role: 'Production Manager',
      company: 'SunnyHill Festival',
      testimonial: "In the challenging environment of a multi-day music festival, EventNet's robust setup handled thousands of users and maintained uptime for our payment systems. The LTE backup saved us during a brief power outage.",
      rating: 4,
      image: null
    },
    {
      name: 'Drita Hajdari',
      role: 'CEO',
      company: 'Pristina Expo Center',
      testimonial: "We've tried various solutions for our exhibition space, but EventNet Kosovo offers superior service and reliability. Now we recommend them to all exhibitors who need dedicated connectivity.",
      rating: 5,
      image: null
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisibleCount = () => {
    if (window.innerWidth < 768) {
      setVisibleCount(1);
    } else if (window.innerWidth < 1024) {
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (testimonials.length - visibleCount + 1)
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
      />
    ));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            Don't just take our word for it — hear from event organizers who have experienced our seamless connectivity solutions.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index + currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-400">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic flex-grow">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>

          {testimonials.length > visibleCount && (
            <div className="flex justify-center mt-8 space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Previous testimonials"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Next testimonials"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 