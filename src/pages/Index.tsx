
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { Clock, Doctor, Hospital, MedKit, Heart, User } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "24/7 Nursing Care",
      description: "Round-the-clock professional nursing care in the comfort of your home",
      icon: Clock
    },
    {
      title: "Doctor Consultation",
      description: "Expert medical consultation and regular health check-ups",
      icon: Doctor
    },
    {
      title: "Physiotherapy Service",
      description: "Professional physiotherapy treatments for rehabilitation and recovery",
      icon: MedKit
    },
    {
      title: "Lab Test",
      description: "Convenient home-based laboratory testing services",
      icon: Hospital
    },
    {
      title: "Equipment Rental",
      description: "Medical equipment rental service for home healthcare needs",
      icon: MedKit
    },
    {
      title: "Mother Baby Care",
      description: "Specialized care services for mothers and newborns",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#4A7C7C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Home Healthcare Services in Kathmandu
            </h1>
            <p className="text-xl mb-8">
              Providing reliable nursing services with basic and professional care in the comfort of your home.
            </p>
            <a href="#contact" className="bg-white text-[#4A7C7C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Us</h2>
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Hope Home Care?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <User className="h-5 w-5 text-[#4A7C7C] mr-2" />
                  <span>Certified and verified healthcare professionals</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-5 w-5 text-[#4A7C7C] mr-2" />
                  <span>Personalized care plans for each patient</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-[#4A7C7C] mr-2" />
                  <span>24/7 availability for emergency care</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/eb77485c-d703-4c8e-a445-250876f606e1.png"
                alt="Hope Home Care Service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7C7C]" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7C7C]" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7C7C]" rows={4}></textarea>
                </div>
                <button type="submit" className="w-full bg-[#4A7C7C] text-white py-2 px-4 rounded-md hover:bg-[#3A6B6B] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
