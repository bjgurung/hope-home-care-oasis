
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesScroll = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <img 
        src="/lovable-uploads/ed220fcd-9515-452b-9ade-6891fcb7c0de.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/90 to-[#4A7C7C]/70"></div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Professional Home Healthcare Services in Kathmandu
            </h1>
            <p className="text-xl mb-8 text-white/90 drop-shadow-md max-w-xl">
              Providing reliable nursing services with basic and professional care in the comfort of your home.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={handleContactScroll}
                className="bg-white text-[#4A7C7C] hover:bg-gray-100 px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                onClick={handleServicesScroll}
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold transition-all"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
