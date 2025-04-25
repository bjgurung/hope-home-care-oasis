
import { Clock, BriefcaseMedical, Bandage, Hospital, Syringe, Pill } from 'lucide-react';
import ServiceCard from './ServiceCard';

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

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive healthcare services tailored to meet your needs in the comfort of your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="transform transition-all duration-300 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
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
  );
};

export default ServicesSection;
