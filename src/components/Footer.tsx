
import { Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/3419bc39-d39b-4364-8fe8-c798c44c6901.png" 
                alt="Hope Home Care Logo" 
                className="h-12 w-12 brightness-200"
              />
              <span className="ml-2 text-xl font-semibold">Hope Home Care</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">
              Dedicated to providing professional and compassionate home healthcare services in Kathmandu, Nepal.
            </p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.facebook.com/HomeCareHope" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Nursing Care</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Doctor Consultation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Physiotherapy</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Medicine Delivery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors flex items-center">
                    <span className="mr-2">Careers</span>
                    <span className="bg-[#4A7C7C] text-white text-xs px-2 py-0.5 rounded-full">Hiring</span>
                  </Link>
                </li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>Basundhara, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 mt-1" />
                  <div>
                    <div>01-5915197</div>
                    <div>9851216996</div>
                    <div>9851105197</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-1" />
                  <span>info@hopecare.com.np</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hope Home Care. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Available 24/7 for your healthcare needs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
