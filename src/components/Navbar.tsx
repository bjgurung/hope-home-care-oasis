
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className={`h-8 w-8 ${isScrolled ? 'text-[#4A7C7C]' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-semibold ${isScrolled ? 'text-[#4A7C7C]' : 'text-white'}`}>Hope Home Care</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`${isScrolled ? 'text-gray-600 hover:text-[#4A7C7C]' : 'text-white hover:text-white/80'} transition-colors`}>Services</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-600 hover:text-[#4A7C7C]' : 'text-white hover:text-white/80'} transition-colors`}>About</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-600 hover:text-[#4A7C7C]' : 'text-white hover:text-white/80'} transition-colors`}>Contact</a>
            <Button 
              onClick={handleGetStarted}
              className={`${isScrolled ? 'bg-[#4A7C7C] text-white' : 'bg-white text-[#4A7C7C]'} rounded-full px-6`}
            >
              Get Started
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-600' : 'text-white'}`}>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#4A7C7C]">Services</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#4A7C7C]">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#4A7C7C]">Contact</a>
            <div className="px-3 py-2">
              <Button 
                onClick={handleGetStarted}
                className="w-full bg-[#4A7C7C] text-white rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
