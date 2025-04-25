
import { HeartPulse } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <HeartPulse className="h-8 w-8 text-[#4A7C7C]" />
              <span className="ml-2 text-xl font-semibold">Hope Home Care</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">
              Professional home healthcare services in Kathmandu, Nepal.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Nursing Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Doctor Consultation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Physiotherapy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kathmandu, Nepal</li>
                <li>info@hopehomecare.com</li>
                <li>+977 1234567890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hope Home Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
