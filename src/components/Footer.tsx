import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-primary-500 font-bold text-xl">EventNet</span>
              <span className="text-accent-500 font-bold">Kosovo</span>
            </div>
            <p className="text-sm mb-4">
              Your event. Instantly connected. Professional mesh network rental services for events of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram className="h-5 w-5 text-gray-400 hover:text-primary-500 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter className="h-5 w-5 text-gray-400 hover:text-primary-500 transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook className="h-5 w-5 text-gray-400 hover:text-primary-500 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="h-5 w-5 text-gray-400 hover:text-primary-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#guest-wifi" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Guest Wi-Fi
                </Link>
              </li>
              <li>
                <Link href="#vendor-network" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Vendor Network
                </Link>
              </li>
              <li>
                <Link href="#streaming" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  QoS for Streaming
                </Link>
              </li>
              <li>
                <Link href="#staff-network" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Private Staff Network
                </Link>
              </li>
              <li>
                <Link href="#lte-backup" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  LTE/5G Backup
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                Pristina, Kosovo
              </li>
              <li>
                <a href="mailto:contact@eventnet-ks.com" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  contact@eventnet-ks.com
                </a>
              </li>
              <li>
                <a href="tel:+38344123456" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  +383 44 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} EventNet Kosovo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 