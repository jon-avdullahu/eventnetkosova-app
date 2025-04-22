"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Jon Avdullahu',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in event management, Arben founded EventNet Kosovo to revolutionize how events are organized in the region.',
    image: '/team/arben.jpg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 2,
    name: 'Rina Gashi',
    role: 'Head of Operations',
    bio: 'Rina ensures all events run smoothly from concept to execution, with a background in logistics and project management.',
    image: '/team/rina.jpg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 3,
    name: 'Bekim Shala',
    role: 'Technical Director',
    bio: 'Bekim oversees all technical aspects of our events, from sound systems to lighting and digital integrations.',
    image: '/team/bekim.jpg',
    social: {
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 4,
    name: 'Lirije Kelmendi',
    role: 'Client Relations Manager',
    bio: 'Lirije works directly with clients to understand their vision and ensure their expectations are not just met, but exceeded.',
    image: '/team/lirije.jpg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 5,
    name: 'Valon Berisha',
    role: 'Marketing Specialist',
    bio: 'Valon develops strategic marketing campaigns to promote both EventNet Kosovo and our clients' events.',
    image: '/team/valon.jpg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 6,
    name: 'Donika Hasani',
    role: 'Creative Director',
    bio: 'Donika brings events to life with her creative vision, designing unforgettable experiences for attendees.',
    image: '/team/donika.jpg',
    social: {
      linkedin: 'https://linkedin.com/'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-primary-500">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate professionals who work tirelessly to make your events extraordinary. 
            Our diverse team brings together expertise from various fields to deliver exceptional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-80 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 