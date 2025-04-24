
import { useState } from 'react';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-[#4A7C7C]" />
            <span className="ml-2 text-xl font-semibold text-[#4A7C7C]">Hope Home Care</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#4A7C7C]">Services</a>
            <a href="#about" className="text-gray-600 hover:text-[#4A7C7C]">About</a>
            <a href="#contact" className="text-gray-600 hover:text-[#4A7C7C]">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-[#4A7C7C]">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-[#4A7C7C]">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-[#4A7C7C]">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
