
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { Clock, Syringe, Hospital, BriefcaseMedical, Pill, Bandage, UserRound, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "24/7 Nursing Care",
      description: "Round-the-clock professional nursing care in the comfort of your home",
      icon: Clock
    },
    {
      title: "Doctor Consultation",
      description: "Expert medical consultation and regular health check-ups",
      icon: BriefcaseMedical
    },
    {
      title: "Physiotherapy Service",
      description: "Professional physiotherapy treatments for rehabilitation and recovery",
      icon: Bandage
    },
    {
      title: "Lab Test",
      description: "Convenient home-based laboratory testing services",
      icon: Hospital
    },
    {
      title: "Equipment Rental",
      description: "Medical equipment rental service for home healthcare needs",
      icon: Syringe
    },
    {
      title: "Mother Baby Care",
      description: "Specialized care services for mothers and newborns",
      icon: Pill
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <img 
          src="/lovable-uploads/eb77485c-d703-4c8e-a445-250876f606e1.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/90 to-[#4A7C7C]/70"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Professional Home Healthcare Services in Kathmandu
              </h1>
              <p className="text-xl mb-8 text-white/90 drop-shadow-md max-w-xl">
                Providing reliable nursing services with basic and professional care in the comfort of your home.
              </p>
              <div className="flex gap-4">
                <Button className="bg-white text-[#4A7C7C] hover:bg-gray-100 px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Contact Us
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold transition-all">
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We offer comprehensive healthcare services tailored to meet your needs in the comfort of your home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`hover-scale transition-all duration-300 delay-${index * 100}`}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Us</h2>
            <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
          </div>
          <div className="md:flex items-center justify-between gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-[#4A7C7C]">Why Choose Hope Home Care?</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="bg-[#4A7C7C] p-3 rounded-full mr-4">
                        <UserRound className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-700">Certified and verified healthcare professionals</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="bg-[#4A7C7C] p-3 rounded-full mr-4">
                        <HeartPulse className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-700">Personalized care plans for each patient</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="bg-[#4A7C7C] p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-700">24/7 availability for emergency care</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/lovable-uploads/eb77485c-d703-4c8e-a445-250876f606e1.png"
                  alt="Hope Home Care Service"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A7C7C]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Compassionate Care</h3>
                  <p className="text-white/90">We treat our patients like family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Have questions or ready to schedule service? Get in touch with our team today.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C7C] focus:border-transparent transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C7C] focus:border-transparent transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C7C] focus:border-transparent transition-all" rows={4} placeholder="How can we help you?"></textarea>
                  </div>
                  <Button className="w-full bg-[#4A7C7C] text-white py-3 px-4 rounded-lg hover:bg-[#3A6B6B] transition-all font-medium">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
